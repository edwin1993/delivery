import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @Output() logoutEvent = new EventEmitter<boolean>();

  constructor() {
    
   }

  ngOnInit() {
    console.log('Iniciando home comp');

  }

  pressLogout($event){
    this.logoutEvent.emit($event);    
  }

}
