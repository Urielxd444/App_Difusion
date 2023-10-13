import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {InicioComponent} from './COMPONENTES/inicio/inicio.component'
import {DatosComponent} from './COMPONENTES/datos/datos.component'
import {MapasComponent} from './COMPONENTES/mapas/mapas.component'

const routes: Routes = [
  {path: 'Inicio', component:InicioComponent},
  {path: 'Datos', component:DatosComponent},
  {path: 'Mapas', component:MapasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
