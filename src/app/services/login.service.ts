import { Injectable } from "@angular/core";
import { UserModel } from "../models/usuario.model";
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class LoginService {

    private user:UserModel = new UserModel;
    private urlService = 'https://us-central1-fast-delivery-241305.cloudfunctions.net/isActiveUser';

    constructor ( private http:HttpClient ) {
        console.log("Service Ready!!!");
    }

    setUser( login:string, password:string ){
        console.log('setting user!!!' + login + ' ' + password);
        this.user.nombre = login;
        this.user.contrasena = password;
    }

    isUserActive(){
        console.log('user is active!!!');
        let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        let options = { headers: headers };
        
//        console.log('user is active!!!');

        return this.http.post(this.urlService, this.user, options);                      
    }
}