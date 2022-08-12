import { Component, NgIterable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from '../register.service';
import { Transaction } from '../transaction';

@Component({
  selector: 'app-view-transactions',
  templateUrl: './view-transactions.component.html',
  styleUrls: ['./view-transactions.component.css']
})
export class ViewTransactionsComponent implements OnInit {
  transactions: NgIterable<Transaction>;

  constructor(private registerService: RegisterService, private route: Router) { }

  ngOnInit(): void {
    this.registerService.viewAllTransactionsForAdmin()
      .subscribe(
        data => {
          this.transactions = data;
          console.log(this.transactions);
        }
      )
  }

}
