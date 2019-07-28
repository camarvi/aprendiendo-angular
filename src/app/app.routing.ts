// Importar modulos del router de Angular
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Importar los componentes
import { HomeComponent } from './home/home.component';
import { VideojuegoComponent } from './videojuego/videojuego.component';
import { ZapatillasComponent } from './zapatillas/zapatillas.component';
import { CursosComponent } from './cursos/cursos.component';


// Array de configuracion de las rutas
const appRoutes: Routes = [
	{path:'' , component:HomeComponent},
	{path:'home' , component:HomeComponent},
	{path:'zapatillas', component:ZapatillasComponent},
	{path:'videojuego', component:VideojuegoComponent},
	{path:'cursos', component:CursosComponent},
	{path:'cursos/:nombre/:followers', component:CursosComponent},
	//{path:'cursos/:nombre/:apellidos', component:CursosComponent},
	{path:'**',component:HomeComponent}
];

//Exportar el modulo de router
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);