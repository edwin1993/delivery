import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { PeopleService } from "../../services/people.service";

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {
  displayedColumns: string[] = ['id','nombres','apellidos','documento','celular','edad','EPS','email','licencia_conduccion'];
  dataSourcePeople: any;
  
  constructor(
    private _peopleService: PeopleService
  ) {
    
    this._peopleService.getPeople().subscribe(resp => {
      console.log(resp[0]);
      this.dataSourcePeople = new MatTableDataSource<Person>( resp[0] );
      this.dataSourcePeople.paginator = this.paginator;

    }, (err) => {
      console.log(err);
      JSON.parse('[{}]');
    });

  }

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {}

}
export interface Person {
  id:number,
  nombres:string,
  apellidos:string,
  documento:string,
  celular:string,
  fk_direccion_casa:number,
  fk_direccion_trabajo:number,
  fk_tipo:number,
  fk_referencia:number,
  fecha_nacimiento:string,
  edad:number,
  EPS:string,
  email:string,
  licencia_conduccion:string
}