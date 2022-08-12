import { Component, NgIterable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from '../product';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-view-products',
  templateUrl: './view-products.component.html',
  styleUrls: ['./view-products.component.css']
})
export class ViewProductsComponent implements OnInit {

  products: NgIterable<Product>;
  product: Product = new Product();

  constructor(private registerService:RegisterService, private route:Router) { }

  ngOnInit(): void {
    if(JSON.parse(sessionStorage.getItem("adminInfo"))==null){
      this.route.navigate(['/adminLogin']);

    }
    else{
        this.registerService.viewAllProducts()
        .subscribe(
          data => {
            this.products = data;
            console.log(this.products);
        }
      )
    }

  }

  edit(productId: number) {
    this.registerService.getProduct(productId)
      .subscribe(
        prd => {
          this.product = prd;
          sessionStorage.setItem("ProductDetails", JSON.stringify(this.product));
          console.log(JSON.stringify(this.product));
          this.route.navigate(['/editProduct']);
        }
    );
   
  }

  logOut(){
    sessionStorage.removeItem('adminInfo');
    sessionStorage.removeItem('ProductDetails');
    this.route.navigate(['/adminLogin']);
  }

}
