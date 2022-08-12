import { Component, NgIterable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../product';
import { RegisterService } from '../register.service';
import { User } from '../user';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: NgIterable<Product>;
  product: Product = new Product();
  user: User = new User();
  
  constructor(private registerService: RegisterService, private route: Router) { }


  ngOnInit(): void {
    if(sessionStorage.getItem("userInfo")==null){
      this.route.navigate(['/login']);
    }
    else{
     this.user = JSON.parse(sessionStorage.getItem("userInfo"));
     this.registerService.viewAllProducts()
     .subscribe(
       data => {
         this.products = data;
         console.log(this.products);
       }
     )

    }

  }

  viewProduct(productId:number) {
    this.registerService.getProduct(productId)
      .subscribe(
        prd => {
          this.product = prd;
          sessionStorage.setItem("BuyProductDetails", JSON.stringify(this.product));
          console.log(JSON.stringify(this.product));
          this.route.navigate(['/productInfo']);
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
