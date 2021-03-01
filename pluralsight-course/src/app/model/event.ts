import { Adresse } from './addresse';
import { MySession } from './session';
export class MyEvent {
    id!: number;
    name! : string;
    date! : Date;
    time! : Date;
    price! : number;
    imageUrl! : string;
    location! : Adresse[];
    sessions! : MySession[]

    constructor() {}
    
    
}