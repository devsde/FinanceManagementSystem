import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
    if(JSON.parse(sessionStorage.getItem("adminInfo"))==null){
      this.route.navigate(['/adminLogin']);

    }
  }

  logOut(){
    sessionStorage.removeItem('adminInfo');
    sessionStorage.removeItem('ProductDetails');
    this.route.navigate(['/adminLogin']);
  }

}
