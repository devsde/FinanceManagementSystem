import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EncrypDecrypService } from '../encryp-decryp.service';
import { Login } from '../login';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  login:Login=new Login();
  message:string;
  constructor(private registerService:RegisterService,private router:Router,private encryp:EncrypDecrypService) { }
 

  ngOnInit(): void {
    
  }

  loginUser(){
 
    this.registerService.findUserById(this.login.userId)
    .subscribe(
      usr=>{
        if(usr==null){
          this.message="User does not exist";
        }
        else{
          if(this.encryp.get('123456$#@$^@1ERF', usr.userPassword)==this.login.password){
            if(usr.eligible==true){
              sessionStorage.setItem("userInfo", JSON.stringify(usr));
              this.router.navigate(['/dashboard']);
            }
            else{
              this.message="You are not validated by the admin"
            }

          }
          else{
            this.message="Invalid Credentials"

          }




        }
      }
    )

  }

}
