import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminLogin } from '../admin-login';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {


  adminLogin: AdminLogin = new AdminLogin();
  errorMessage: string;
  constructor(private registerService:RegisterService,private router:Router) { }

  ngOnInit(): void {
  }

  login(){
    this.registerService.adminLogin(this.adminLogin)
    .subscribe(
      validation => {
        console.log(this.adminLogin.password);
        console.log(this.adminLogin.username);
        if(validation){
          sessionStorage.setItem("adminInfo",JSON.stringify(this.adminLogin));
         
          this.router.navigate(['/adminDashboard']);
        }
        else {
          this.errorMessage = "Invalid Credentials";
          console.log(this.errorMessage);
        }
      }
    );
  }

}
