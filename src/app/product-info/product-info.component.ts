import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Card } from '../card';
import { Product } from '../product';
import { RegisterService } from '../register.service';
import { TransProductCard } from '../trans-product-card';
import { Transaction } from '../transaction';
import { User } from '../user';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.css']
})
export class ProductInfoComponent implements OnInit {


  today = new Date();
  user: User = new User();
  transaction: Transaction = new Transaction();
  updatedTransaction:Transaction;
  card:Card;
  updatedCard:Card;
  product:Product;
 
  constructor(private registerService: RegisterService, private route: Router) { }

  ngOnInit(): void {
    // this.user = JSON.parse(sessionStorage.getItem("userInfo"));
    if(JSON.parse(sessionStorage.getItem("userInfo"))==null){
      this.route.navigate(['/login']);
    }
    else{
      
      this.user = JSON.parse(sessionStorage.getItem("userInfo"));
      this.product = JSON.parse(sessionStorage.getItem("BuyProductDetails"));
      this.card= JSON.parse(sessionStorage.getItem("cardInfo"));
      this.transaction.emiCard=this.card;
      this.transaction.product=this.product;

    }
    
 
  }
  createTransaction() {
  
    if (this.card.emiCardBalance > this.product.productCost) {
      this.transaction.orderDate = new Date(
        this.today.getFullYear(),
        this.today.getMonth(),
        this.today.getDate() + 1);
      this.transaction.totalAmount = this.product.productCost + 0.032 * (this.product.productCost);
      this.transaction.paidAmount=0;
      this.transaction.balanceAmount = this.transaction.totalAmount - this.transaction.paidAmount;
      this.transaction.emiPaid = 0;
      this.transaction.emiRemaining = this.transaction.emiScheme - this.transaction.emiPaid;

      this.card.emiCardBalance =this.card.emiCardBalance - this.transaction.totalAmount;
      this.registerService.updateCard(this.card).subscribe(
        crd => {
          this.updatedCard=crd;
          sessionStorage.setItem("cardInfo", JSON.stringify(this.updatedCard));

        }
      );



     
      this.registerService.createTransaction(this.transaction)
        .subscribe(
          tr => {
            this.updatedTransaction=tr;
            this.updatedTransaction.emiCard=this.updatedCard;
            sessionStorage.setItem("transactionInfo", JSON.stringify(this.updatedTransaction));
            this.route.navigate(['/transactionReceipt']);
          }
        );

    }
    else {
      alert("Insufficient Balance.")
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
