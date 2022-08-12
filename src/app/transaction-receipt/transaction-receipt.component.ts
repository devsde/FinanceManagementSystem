import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from '../register.service';
import { Transaction } from '../transaction';
import { User } from '../user';

@Component({
  selector: 'app-transaction-receipt',
  templateUrl: './transaction-receipt.component.html',
  styleUrls: ['./transaction-receipt.component.css']
})
export class TransactionReceiptComponent implements OnInit {

  transaction: Transaction = new Transaction();
  user: User = new User();
  
  constructor(private registerService: RegisterService, private route: Router) { }

  ngOnInit(): void {
    // this.user = JSON.parse(sessionStorage.getItem("userInfo"));
    if(sessionStorage.getItem("userInfo")==null){
      this.route.navigate(['/login']);
    }
    else{
      this.user = JSON.parse(sessionStorage.getItem("userInfo"));
      this.transaction = JSON.parse(sessionStorage.getItem("transactionInfo"));
      console.log(this.transaction);


    }
  }

  logOut(){
    console.log("log out");
    sessionStorage.removeItem("userInfo");
    sessionStorage.removeItem("cardInfo");
    sessionStorage.removeItem("productInfo");
    sessionStorage.removeItem("transactionInfo");
    this.route.navigate(['/login']);

  }

}
