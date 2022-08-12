import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AdminLogin } from './admin-login';
import { Card } from './card';
import { ForgetPassword } from './forget-password';
import { Product } from './product';
import { ProductPic } from './product-pic';
import { TransProductCard } from './trans-product-card';
import { Transaction } from './transaction';
import { UpdateProduct } from './update-product';
import { UpdateUser } from './update-user';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http:HttpClient) { }

  registerUser(user: User): Observable<string> {
    return this.http.post("http://localhost:9191/users/signup", user,{responseType:'text'});
  }y

  adminLogin(adminLogin:AdminLogin):Observable<boolean>{
    return this.http.post<boolean>("http://localhost:9191/admin/login", adminLogin);
  }

  addProduct(product: Product): Observable<UpdateProduct> {
    return this.http.post <UpdateProduct>("http://localhost:9191/products/addProduct", product);
  }

  uploadProductPic(formData: FormData) {
    return this.http.post("http://localhost:9191/products/pic-upload", formData, { responseType: 'text' });
  }

  viewAllProducts(): Observable<any> {
    return this.http.get("http://localhost:9191/products/viewAll");
  }

  getProduct(productId: number): Observable<Product> {
    return this.http.get<Product>("http://localhost:9191/products/getproduct?productId=" + productId);
  }

  updateProduct(product: Product): Observable<UpdateProduct> {
    return this.http.put<UpdateProduct>("http://localhost:9191/products/update", product);
  }

  viewAllUsers() :Observable<any> {
    return this.http.get("http://localhost:9191/users/viewAll");
  }

  activateUser(userId: number): Observable<boolean>{
    return this.http.put<boolean>("http://localhost:9191/admin/activate/" + userId, { observe: 'response' });
  }
  
  getCardById(userId: number): Observable<Card> {
    return this.http.get<Card>("http://localhost:9191/cards/viewEmiCard/" + userId);
  }
 
  createTransaction(transaction: Transaction): Observable<Transaction> {
    return this.http.post<Transaction>("http://localhost:9191/transaction/addTransaction", transaction);
  }

  viewAllTransactions(emiCardNo:number): Observable<any> {
    return this.http.get("http://localhost:9191/transaction/viewAllTransactions/"+emiCardNo);
  }

  updateEmi(transaction: Transaction): Observable<Transaction> {
    return this.http.put<Transaction>("http://localhost:9191/transaction/updateTransaction", transaction);
  }

  updateCard(card: Card): Observable<Card> {
    return this.http.put<Card>("http://localhost:9191/cards/updateCard", card);
  }

  viewAllTransactionsForAdmin(): Observable<any> {
    return this.http.get("http://localhost:9191/transaction/viewTransactions");
  }
  
  findUserById(userId:number):Observable<User>{
    return this.http.get<User>("http://localhost:9191/users/user/"+userId);
  }

  forgotPassword(userId:number):Observable<ForgetPassword>{
    return this.http.put<ForgetPassword>("http://localhost:9191/users/forgotPassword/"+userId, { observe: 'response' });
  }

  updateUser(user:User):Observable<UpdateUser>{
    return this.http.put<UpdateUser>("http://localhost:9191/users/update", user);
  }


}
