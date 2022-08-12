import { Component, OnInit } from '@angular/core';
import { ChangePassword } from '../change-password';
import { EncrypDecrypService } from '../encryp-decryp.service';
import { ForgetPassword } from '../forget-password';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {

  changePassword:ChangePassword=new ChangePassword();
  forgotPassword:ForgetPassword;
  message:string="";
  error:string="";
  boolLoader: boolean = false;

  constructor(private registerService:RegisterService,private encryp:EncrypDecrypService) { }

  ngOnInit(): void {
  }

  sendOtp() {
    this.error = "";
    this.message = "";
    this.boolLoader = true;
    this.registerService.forgotPassword(this.changePassword.userId)
    .subscribe(
      fp => {
        this.boolLoader = false;
        this.forgotPassword=fp;
        
        if (fp.otp == 0) {
          this.error = fp.message;
        }
        else {
          this.message = fp.message;
        }
       
      }
    )

  }

  resetPassword() {
    this.error = "";
    this.message = "";
    this.boolLoader = true;
    if(this.forgotPassword.otp==this.changePassword.otp){
      if(this.changePassword.newPassword==this.changePassword.confirmNewPassword){
       
        this.forgotPassword.user.userPassword= this.encryp.set('123456$#@$^@1ERF', this.changePassword.newPassword);
        this.registerService.updateUser(this.forgotPassword.user)
        .subscribe(
          updatedUser => {
            this.boolLoader = false;
            this.message="Password changed";
          }
        )
      }
      else {
        this.boolLoader = false;
        this.error = "Password and Confirm Password does not match";
      }
    }
    else {
      this.boolLoader = false;
      this.error="Invalid OTP";
    }
  }

}
