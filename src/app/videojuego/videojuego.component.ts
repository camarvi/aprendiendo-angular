import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';

@Component({
	selector: 'videojuego',
	templateUrl: './videojuego.component.html'
})

export class VideojuegoComponent implements OnInit, DoCheck, OnDestroy{
	public titulo: string;
	public listado: string;

	constructor(){
		this.titulo = "Componente de Videojuegos (2)";
		this.listado = "Listado Juegos más populares";
	//	console.log("Se ha cargado el componente videojuego.component.ts");
	}

	ngOnInit() {
		//console.log("Componente Videojuegos: OnInit Ejecutado !!");
  	}

   // DoCheck --> Se ejecuta cuando se realiza algun cambio en el componente
   //             o en la aplicacion de angular en general

   ngDoCheck(){
   	//	console.log("Componente Videojuegos: DoCheck Ejecutado !!");
   }

   cambiarTitulo(){
   		this.titulo = "Nuevo Titulo componente Videojuegos";
   }

   // OnDestroy --> Ejecutar algo antes de eliminar la instancia de un componente

   ngOnDestroy(){
   	console.log("Componente Videojuegos: OnDestroy Ejecutado !!");
   }

}