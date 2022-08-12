import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../product';
import { RegisterService } from '../register.service';
import { UpdateProduct } from '../update-product';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  product: Product = new Product();
  updateMessage: string;

  constructor(private registerService: RegisterService,private route:Router) { }

  ngOnInit(): void {
    if(JSON.parse(sessionStorage.getItem("ProductDetails"))==null){
       this.route.navigate(['/adminLogin']);

    }
    else{
      this.product = JSON.parse(sessionStorage.getItem("ProductDetails"));
       
    }

  }

  editProduct() {
    this.registerService.updateProduct(this.product)
      .subscribe(
        updateProduct => {
          this.product = updateProduct.product; 
          sessionStorage.setItem("ProductDetails", JSON.stringify(this.product));
          console.log(this.product);
          this.updateMessage = updateProduct.msg;
          alert(this.updateMessage);
          // sessionStorage.setItem("ProductDetails", JSON.stringify(this.product));
        }
    );
    window.location.reload();

  }
  logOut(){
    sessionStorage.removeItem('adminInfo');
    sessionStorage.removeItem('ProductDetails');
    this.route.navigate(['/adminLogin']);
  }

}
