import { Component } from '@angular/core';
import 'hammerjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fast-delivery-app';
  login = true;
  home = false;

  receiveMessage($event) {    
    this.home = $event
    this.login = !this.home;
  }

  defineLogout($event){
    this.login = $event
    this.home = !this.login;
  }
}
