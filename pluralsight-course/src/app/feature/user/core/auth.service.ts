import { Injectable } from '@angular/core';
import { MyUser } from '../user.model';

@Injectable({
    providedIn: 'root'
})

export class AuthService {
    currentUser: MyUser;
    constructor(user: MyUser) {
        this.currentUser = user;
    }

    loginUser(userName: string, password: string): void {
        this.currentUser = {
            id: 1,
            userName: userName,
            firstName: 'John',
            lastName: 'Papa',
        };

    }
    updateCurrentUser(username: string, password: string): void{

    }
    isAuthenticated(): boolean {
        return !!this.currentUser;
    }


}
