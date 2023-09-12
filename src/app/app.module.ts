import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NAVBARComponent } from './COMPONENTES/NAVBAR/navbar.component';
import { GaleriaComponent } from './Components/galeria/galeria.component';
import { InicioComponent } from './COMPONENTES/inicio/inicio.component';
import { MapasComponent } from './COMPONENTES/mapas/mapas.component';
import { DatosComponent } from './COMPONENTES/datos/datos.component';

@NgModule({
  declarations: [
    AppComponent,
    NAVBARComponent,
    GaleriaComponent,
    InicioComponent,
    MapasComponent,
    DatosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
