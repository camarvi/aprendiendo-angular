import { Component } from '@angular/core';
import { Configuracion } from './models/configuracion';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'aprendiendo-angular';
  public mostrar_videojuegos : boolean = true;
  public descripcion : string;
  public config;

  constructor(){
  	this.title = Configuracion.titulo;
  	this.descripcion = Configuracion.descripcion;
  	this.config = Configuracion;
  }

  ocultarVideojuegos(valor){
  	this.mostrar_videojuegos = valor;
  }

 
}
