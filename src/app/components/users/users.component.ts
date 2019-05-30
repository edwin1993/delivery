import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { UserService } from "../../services/user.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  displayedColumns: string[] = ['id', 'nombre', 'contrasena', 'activo'];
  dataSourceUsers: any;
  
  constructor(
    private _userService: UserService
  ) {
    
    this._userService.getUsers().subscribe(resp => {
      console.log(resp[0]);
      this.dataSourceUsers = new MatTableDataSource<User>( resp[0] );
      this.dataSourceUsers.paginator = this.paginator;

    }, (err) => {
      console.log(err);
      JSON.parse('[{}]');
    });

  }

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {}

}
export interface User {
  id: number;
  nombre: string;
  contrasena: string;
  activo: number;
  fk_persona: number;
  fk_rol: number;
}
