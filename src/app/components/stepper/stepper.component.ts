import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormGroupName } from "@angular/forms";
import { CreatedeliveryService } from "../../services/createdelivery.service";
import { EnvioModel } from "../../models/envio.model";


@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.css']
})
export class StepperComponent {
  forma: FormGroup;
  entrega: EnvioModel;

  constructor(
    private _CreatedeliveryService: CreatedeliveryService
  ) {
    this.forma = new FormGroup({
      'nombres_remitente': new FormControl('Anderson'),
      'apellidos_remitente': new FormControl(),
      'direccion_remitente': new FormControl(),
      'telefono_remitente': new FormControl(),
      'ciudad_remitente': new FormControl(),
      'nombres_destinatario': new FormControl(),
      'apellidos_destinatario': new FormControl(),
      'direccion_destinatario': new FormControl(),
      'telefono_destinatario': new FormControl(),
      'ciudad_destinatario': new FormControl(),
      'descripcion_mercancia': new FormControl(),
      'peso_mercancia': new FormControl(),
      'estado_entrega': new FormControl()
      
    });

    this.entrega = {
      "nombres_remitente": "$$$$$$",
      "apellidos_remitente": "$$$$$$",
      "direccion_remitente": "$$$$$$",
      "telefono_remitente": "$$$$$$",
      "ciudad_remitente": "$$$$$$",
      "nombres_destinatario": "$$$$$$",
      "apellidos_destinatario": "$$$$$$",
      "direccion_destinatario": "$$$$$$",
      "telefono_destinatario": "$$$$$$",
      "ciudad_destinatario": "$$$$$$",
      "descripcion_mercancia": "$$$$$$",
      "peso_mercancia": "$$$$$$",
      "estado_entrega": "$$$$$$"
    };
  }

  crearEnvio() {
    console.log(this.forma.value);
    
    this._CreatedeliveryService.createEnvio( this.forma.value ).subscribe(resp => {
      console.log(resp);
    }, (err) => {
      console.log(err);
      JSON.parse('[{}]');
    });
  }

}
