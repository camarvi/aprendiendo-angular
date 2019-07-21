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
	public color : string;
	public mi_marca : string;

	constructor(){

		this.color = "red";
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

  	getMarca(){
  		alert(this.mi_marca);
  	}

  	addMarca(){
  		this.marcas.push(this.mi_marca);
  	}

  	borrarMarca(index){
  		this.marcas.splice(index,1);
  	}

  	onBlur(){
  		console.log("Has salido del Input mi_marca");
  	}

  	mostrarPalabra(){
  		console.log("La marca nueva es " + this.mi_marca);
  		alert(this.mi_marca);
  	}
}