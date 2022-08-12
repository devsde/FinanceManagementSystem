import { User } from "./user";

export class Card {
    emiCardNo: number;
    emiValidity : string;
    emiCardType: string;
    emiCardLimit: number;
    emiCardBalance: number;
    user: User;
}
