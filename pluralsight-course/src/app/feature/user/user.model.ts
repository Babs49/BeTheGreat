import { Injectable } from "@angular/core";

@Injectable({providedIn : 'root'})
export class MyUser {
    id!: number;
    firstName!: string;
    lastName!: string;
    userName!: string;

    constructor() {}
}
