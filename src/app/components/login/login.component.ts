import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from "@angular/router";
import { LoginService } from "../../services/login.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  forma: FormGroup;

  @Output() messageEvent = new EventEmitter<boolean>();
  errorMessage = false;
  

  constructor(
    private router: Router,
    private _loginService: LoginService
  ) {
    this.forma = new FormGroup({
      'login': new FormControl('Anderson'),
      'password': new FormControl()
    })
  }

  ngOnInit() {
    //this.login = this._loginService.setUser();
  }

  getAccess() {
    console.log('Do it submit');
    console.log(this.forma.value.password);

    this._loginService.setUser(this.forma.value.login, this.forma.value.password);
    this._loginService.isUserActive()
      .subscribe( resp => {
          console.log(resp);
          if(resp[0][0].useractive == 1){  
            console.log("BUEN USUARIO");          
            this.messageEvent.emit(true);            
          }else{
            this.messageEvent.emit(false);
            this.errorMessage = true;
          }
      }, (err) => {
          console.log(err);
      }); 

    // console.log( loginCorrect );

    //this.router.navigate(['/home']);
  }


}
