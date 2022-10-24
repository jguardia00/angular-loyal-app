import { Component, OnInit } from '@angular/core';

export interface Articulo {
  id: number,
  titulo:string
}

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  nombre: string = 'Javier Guardia';
  lista: string[] =[];
  edad:number = 15;
  alto=true;
  articulo: Articulo = {
    id:1,
    titulo:'titulo'
  }

  constructor() {
    this.lista.push('primero');
    this.lista.push('segundo');
   }

  ngOnInit(): void {
  }

  getArticulo():Articulo{
    return this.articulo;
  }

}
