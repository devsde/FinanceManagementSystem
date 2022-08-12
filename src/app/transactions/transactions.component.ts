import { NgIf } from '@angular/common';
import { Component, NgIterable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Card } from '../card';
import { RegisterService } from '../register.service';
import { Transaction } from '../transaction';
import { User } from '../user';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit {

  transactions: NgIterable<Transaction>;
  card: Card;
  // transaction: Transaction = new Transaction();
  user: User = new User();
  updatedCard:Card;
  // updatedTransaction:Transaction;
  constructor(private registerService: RegisterService, private route: Router) { 
    
  }

  ngOnInit(): void {
    if(sessionStorage.getItem("userInfo")==null){
      this.route.navigate(['/login']);
    }
    else{
      this.user = JSON.parse(sessionStorage.getItem("userInfo"));
      this.card = JSON.parse(sessionStorage.getItem("cardInfo"));
      this.registerService.viewAllTransactions(this.card.emiCardNo)
        .subscribe(
          data => {
            this.transactions = data;
          }
        )
    }

  }

  updateEmi(t:Transaction) {
    console.log("inside");

    if(t.emiPaid==0){
      t.paidAmount=(t.product.productCost/t.emiScheme)+0.032*(t.product.productCost);
      t.emiCard.emiCardBalance =t.emiCard.emiCardBalance+(t.product.productCost/t.emiScheme)+0.032*(t.product.productCost);
    }
    else{
      console.log("no 1 emi");
      t.paidAmount=t.paidAmount+(t.product.productCost/t.emiScheme);
      t.emiCard.emiCardBalance =t.emiCard.emiCardBalance+(t.product.productCost/t.emiScheme);

    }

    t.balanceAmount = t.totalAmount - t.paidAmount;
    t.emiPaid = t.emiPaid+1;
    t.emiRemaining = t.emiScheme - t.emiPaid;


  
    this.registerService.updateCard(t.emiCard).subscribe(
      crd => {
        sessionStorage.setItem("cardInfo", JSON.stringify(crd));

      }
    );

  
 
    this.registerService.updateEmi(t)
      .subscribe(
        tr => {
         

        
        }
      );
   
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
