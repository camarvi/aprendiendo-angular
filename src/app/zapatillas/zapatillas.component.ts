import { Component, OnInit } from '@angular/core';
import { Zapatilla } from '../models/zapatilla'
import { ZapatillaService } from '../services/zapatilla.service'

@Component({
	selector : 'zapatillas',
	templateUrl : './zapatillas.component.html',
  providers : [ZapatillaService]

})

export class ZapatillasComponent implements OnInit{
	public titulo: string = "Componente de Zapatillas";
	public zapatillas: Array<Zapatilla>;
	public marcas : Array<string>;
	public color : string;
	public mi_marca : string;

	constructor(
      private _zapatillaService : ZapatillaService
    ){

		this.color = "red";
		this.marcas = new Array();
		
	}

	ngOnInit() {
		this.zapatillas = this._zapatillaService.getZapatillas();
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