import { Card } from "./card";
import { Product } from "./product";
import { Transaction } from "./transaction";

export class TransProductCard {
    transaction: Transaction;
    product: Product;
    emiCard: Card;
}
