import { Injectable } from "@angular/core";
import { UserModel } from "../models/usuario.model";
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class UserService {

    private user:UserModel = new UserModel;
    private urlService = 'https://us-central1-fast-delivery-241305.cloudfunctions.net/getUsers';

    constructor ( private http:HttpClient ) {
        console.log("User Service Ready!!!");
    }

    getUsers(){
        console.log('get Users is active!!!');

        let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        let options = { headers: headers };

        return this.http.post(this.urlService, {}, options);                                  
    }
}