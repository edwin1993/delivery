import { Injectable } from "@angular/core";
import { UserModel } from "../models/usuario.model";
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class CreateuserService {

    private user:UserModel = new UserModel;
    private urlService = 'https://us-central1-fast-delivery-241305.cloudfunctions.net/createUser';
    private User:any;

    constructor ( private http:HttpClient ) {
        console.log("Create User Service Ready!!!");
    }

    createUsers( nombre:string, contrasena:string, fk_persona:number, activo:number, fk_rol:number ){
        console.log('create Users is active!!!');
        
        console.log(nombre); 
        console.log(contrasena); 
        console.log(fk_persona); 
        console.log(activo); 
        console.log(fk_rol);
        
        this.User = {
            "nombre" : nombre, 
            "contrasena" : contrasena, 
            "fk_persona" : fk_persona, 
            "activo" : activo, 
            "fk_rol" : fk_rol
        }

        let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        let options = { headers: headers };

        return this.http.post(this.urlService, this.User, options);                                  
    }
}