import { Card } from "./card";
import { Product } from "./product";

export class Transaction {
    transactionId:number;
    emiScheme:number;
    orderDate:Date;
    paidAmount:number;
    balanceAmount: number;
    totalAmount: number;
    emiPaid:number;
    emiRemaining: number;
    emiCard: Card;
    product: Product;
}
