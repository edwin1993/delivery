import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormGroupName } from "@angular/forms";
import { CreateuserService } from "../../services/createuser.service";
import { Router } from '@angular/router';
import {ViewChild, ElementRef} from '@angular/core';

@Component({
  selector: 'app-crearusuario',
  templateUrl: './crearusuario.component.html',
  styleUrls: ['./crearusuario.component.css']
})
export class CrearusuarioComponent implements OnInit {

  @ViewChild('closeBtn') closeBtn: ElementRef;

  forma:FormGroup;

  people = [
    {
      'id':1,
      'nombre':'Anderson R.'
    },
    {
      'id':2,
      'nombre':'Jess C.'
    }
  ];

  rols = [
    {
      'id':1,
      'nombre':'None R.'
    },
    {
      'id':2,
      'nombre':'Cine C.'
    }
  ];

  constructor(
    private router:Router,
    private _createUserService:CreateuserService
  ) {
    this.forma = new FormGroup({
      'nombre':new FormControl('Anderson'),
      'contrasena': new FormControl(),
      'activo':new FormControl(false),
      'fk_persona':new FormControl(2),
      'fk_rol':new FormControl(1)
    });
  }

  ngOnInit() {
  }

  crearUsuario(){
    console.log(this.forma.value);
    let activo = this.forma.value.activo ? 1 : 0;
    this._createUserService.createUsers(
      this.forma.value.nombre, 
      this.forma.value.contrasena,
      this.forma.value.fk_persona,
      activo,
      this.forma.value.fk_rol
    ).subscribe(resp => {
      console.log(resp);
      this.closeModal();
    }, (err) => {
      console.log(err);
      JSON.parse('[{}]');
    });
  }

  private closeModal(): void {
    this.closeBtn.nativeElement.click();
  }
}
