import { Component, OnInit } from '@angular/core';
import { Zapatilla } from '../models/zapatilla'

@Component({
	selector : 'zapatillas',
	templateUrl : './zapatillas.component.html'

})

export class ZapatillasComponent implements OnInit{
	public titulo: string = "Componente de Zapatillas";
	public zapatillas: Array<Zapatilla>;
	public marcas : Array<string>;

	constructor(){
		this.marcas = new Array();
		this.zapatillas =[
			new Zapatilla('Nike Max PG','Nike', 'Amarillo',88, true),
			new Zapatilla('Joma fut','Joma', 'Azul',48, true),
			new Zapatilla('Reebok Classic','Reebok', 'Blanco',80, true),
			new Zapatilla('Nike Runner MD','Nike', 'Negroo',60, true),
			new Zapatilla('Adidas Yezzy','Adidas', 'Gris',180, false)
		]
	}

	ngOnInit() {
		console.log(this.zapatillas);
		this.getMarcas();
  	}

  	getMarcas(){
  		this.zapatillas.forEach((zapatilla, index)=>{
  			
  			// COMPROBAR QUE NO SE REPITEN MARCAS EN EL Array
  			if (this.marcas.indexOf(zapatilla.marca)<0){
  				this.marcas.push(zapatilla.marca);	
  			}

  			console.log(index)
  			});
  		console.log(this.marcas);
  	}

}