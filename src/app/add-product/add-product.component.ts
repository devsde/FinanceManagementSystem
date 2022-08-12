import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../product';
import { ProductPic } from '../product-pic';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  product: Product = new Product();
  message: string;

  constructor(private registerService: RegisterService, private route: Router) { }

  ngOnInit(): void {
    if(JSON.parse(sessionStorage.getItem("adminInfo"))==null){
      this.route.navigate(['/adminLogin']);
    }
  }
  
  addProduct() {
    this.registerService.addProduct(this.product)
      .subscribe(
        data => {
          this.message = data.msg;
          this.product = data.product;
          console.log(JSON.stringify(this.message));
          alert(this.message);
          this.route.navigate(['/addProduct']);
        }
    );
  } 

  productId: any;
  productPic: any;


  onFileChange(event) {
    this.productPic = event.target.files[0];
  }

  upload() {
    let formData = new FormData();
    formData.append('productId', this.product.productId.toString());
    formData.append('productPic', this.productPic);
    this.registerService.uploadProductPic(formData)
      .subscribe(
        data => {
          alert(JSON.stringify(data));
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
