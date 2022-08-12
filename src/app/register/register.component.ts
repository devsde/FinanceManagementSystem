import { Component, OnInit } from '@angular/core';
import { EncrypDecrypService } from '../encryp-decryp.service';
import { RegisterService } from '../register.service';
import { User } from '../user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user:User=new User();
  message:string = "";
  boolLoader: boolean = false;

  constructor(private registerService:RegisterService,private encryp:EncrypDecrypService) { }

  ngOnInit(): void {
  }

  register(){
    
    this.boolLoader = true;
    this.user.eligible=false;
    this.user.userPassword= this.encryp.set('123456$#@$^@1ERF', this.user.userPassword);

  
    this.registerService.registerUser(this.user)
      .subscribe(
        msg => {
          if (msg) {
            this.boolLoader = false;
            this.message = msg;
          }
          console.log(this.message);
        }
      );
  }

}
