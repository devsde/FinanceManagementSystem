import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Card } from '../card';
import { RegisterService } from '../register.service';
import { User } from '../user';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  user: User = new User();
  card: Card = new Card();
  cardno: string;

  constructor(private registerService: RegisterService,private router:Router) { }

  ngOnInit(): void {
    if(sessionStorage.getItem("userInfo")==null){
      this.router.navigate(['/login']);
    }
    else{
      this.user = JSON.parse(sessionStorage.getItem("userInfo"));
      this.getCardById();
    }
    
  }

  getCardById() {
    this.registerService.getCardById(this.user.userId)
      .subscribe(
        c => {
          this.card = c;
          sessionStorage.setItem("cardInfo", JSON.stringify(this.card));
          console.log(this.card);
          this.cardno = "3346-4555-6924-" + JSON.stringify(this.card.emiCardNo);
        }
    );
    
  }

  logOut(){
    sessionStorage.removeItem("userInfo");
    sessionStorage.removeItem("cardInfo");
    sessionStorage.removeItem("productInfo");
    sessionStorage.removeItem("transactionInfo");
    this.router.navigate(['/login']);

  }

}