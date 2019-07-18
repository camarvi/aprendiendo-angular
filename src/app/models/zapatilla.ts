export class Zapatilla{
	/* FORMA USUAL DE DEFINIR LA CLASE
	public nombre: string;
	public marca: string;
	public color: string;
	public precio: number;
	public stock: boolean;

	constructor(nombre,marca,color,precio,stock){
		this.nombre = nombre;
		this.marca = marca;
		this.color = color;
		this.precio = precio;
		this.stock = stock;

	} */

	/* COMO SE HACE CON TYPESCRIPT */
    /* Este codigo equivalo a lo mismo que lo comentado */
	constructor(
		public nombre: string,
		public marca: string,
		public color: string,
		public precio: number,
		public stock: boolean
		){}
}