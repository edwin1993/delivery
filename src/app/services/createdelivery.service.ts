import { Injectable } from "@angular/core";
import { EnvioModel } from "../models/envio.model";
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class CreatedeliveryService {

    private urlService = 'https://us-central1-fast-delivery-241305.cloudfunctions.net/createBox';

    constructor ( private http:HttpClient ) {
        console.log("Create User Service Ready!!!");
    }

    createEnvio( envioObj:EnvioModel ){
        console.log('create Users is active!!!');
        
        console.log(envioObj); 

        let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        let options = { headers: headers };

        return this.http.post(this.urlService, envioObj, options);                                  
    }
}