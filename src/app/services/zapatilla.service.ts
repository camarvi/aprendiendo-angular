import { Injectable } from '@angular/core';
import { Zapatilla } from '../models/Zapatilla'

@Injectable()
export class ZapatillaService{
	
	public zapatillas: Array<Zapatilla>;


	constructor(){
		this.zapatillas =[
			new Zapatilla('Nike Max PG','Nike', 'Amarillo',88, true),
			new Zapatilla('Joma fut','Joma', 'Azul',48, true),
			new Zapatilla('Reebok Classic','Reebok', 'Blanco',80, true),
			new Zapatilla('Nike Runner MD','Nike', 'Negroo',60, true),
			new Zapatilla('Adidas Yezzy','Adidas', 'Gris',180, false)
		]
	}

	getTexto() {
		return "Hola desde el servicio Zapatilla";
	}

	getZapatillas() : Array<Zapatilla> {
		return this.zapatillas;
	}
}