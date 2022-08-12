import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './products/products.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { TransactionReceiptComponent } from './transaction-receipt/transaction-receipt.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductInfoComponent } from './product-info/product-info.component';
import { FormGroup, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CardComponent } from './card/card.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { ViewUsersComponent } from './view-users/view-users.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ViewProductsComponent } from './view-products/view-products.component';
import { AddProductComponent } from './add-product/add-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { ViewTransactionsComponent } from './view-transactions/view-transactions.component';
import { EncrypDecrypService } from './encryp-decryp.service';
import { LoaderComponent } from './loader/loader.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    ProductsComponent,
    ForgotpasswordComponent,
    TransactionsComponent,
    TransactionReceiptComponent,
    LandingPageComponent,
    DashboardComponent,
    ProductInfoComponent,
    CardComponent,
    AdminLoginComponent,
    ViewUsersComponent,
    AdminDashboardComponent,
    ViewProductsComponent,
    AddProductComponent,
    EditProductComponent,
    ViewTransactionsComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    EncrypDecrypService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
