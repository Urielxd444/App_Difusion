import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {InicioComponent} from './COMPONENTES/inicio/inicio.component'
import {DatosComponent} from './COMPONENTES/datos/datos.component'
import {MapasComponent} from './COMPONENTES/mapas/mapas.component'
import {DetalleComponent } from './COMPONENTES/datos/detalle/detalle.component';
import {FooterComponent } from './COMPONENTES/footer/footer.component';
import {GaleriaComponent } from './Components/galeria/galeria.component';

const routes: Routes = [
  {path: 'Inicio', component:InicioComponent},
  {path: 'Datos', component:DatosComponent},
  {path: 'Mapas', component:MapasComponent},
  {path: 'Detalle/ID', component:DetalleComponent},
  {path: 'Footer', component:FooterComponent},
  {path: 'Galeria', component:GaleriaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
