import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { CardComponent } from './card/card.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginComponent } from './login/login.component';
import { ProductInfoComponent } from './product-info/product-info.component';
import { ProductsComponent } from './products/products.component';
import { RegisterComponent } from './register/register.component';
import { TransactionReceiptComponent } from './transaction-receipt/transaction-receipt.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { ViewProductsComponent } from './view-products/view-products.component';
import { ViewTransactionsComponent } from './view-transactions/view-transactions.component';
import { ViewUsersComponent } from './view-users/view-users.component';

const routes: Routes = [
  {
  path: '', component: LandingPageComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'register', component: RegisterComponent
  },
  {
    path: 'dashboard', component: DashboardComponent
  },
  {
    path: 'forgotPassword', component: ForgotpasswordComponent
  },
  {
    path: 'products', component: ProductsComponent
  },
  {
    path: 'productInfo', component: ProductInfoComponent
  },
  {
    path: 'transactions', component: TransactionsComponent
  },
  {
    path: 'transactionReceipt', component: TransactionReceiptComponent
  },
  {
    path: 'card', component: CardComponent
  },
  {
    path: 'adminLogin', component: AdminLoginComponent
  },
  {
    path: 'adminDashboard', component: AdminDashboardComponent
  },
  {
    path: 'viewUsers', component: ViewUsersComponent
  },
  {
    path:'viewProducts', component: ViewProductsComponent
  },
  {
    path: 'addProduct', component: AddProductComponent
  },
  {
    path: 'editProduct', component: EditProductComponent
  },
  {
    path: 'viewTransactions', component: ViewTransactionsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
