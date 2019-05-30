import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class PeopleService {
    
    private urlService = 'https://us-central1-fast-delivery-241305.cloudfunctions.net/getPeople';

    constructor ( private http:HttpClient ) {
        console.log("User Service Ready!!!");
    }

    getPeople(){
        console.log('get people is active!!!');

        let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        let options = { headers: headers };

        return this.http.post(this.urlService, {}, options);                                  
    }
}