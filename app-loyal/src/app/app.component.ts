import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app-loyal';
  mostrar: boolean= false;

  applogin:string = 'className';
  nombres:string[] = ['pepe','juan','luis'];
  nombre:string = '';
  edad:number = 1;

  agregarNombre() {
    this.nombres.push(this.nombre);
  }

  cambiarVisibilidad(){
    console.log("Cambiando Visibilidad")
    this.mostrar= !this.mostrar
  }
  alert(){
    window.alert();
  }

  cambiarClase(){
    this.applogin = 'otraClase';
  }

  getEdad() {
    return this.edad;
  }

}
