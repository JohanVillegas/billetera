import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireModule } from "angularfire2";
import { AngularFireDatabaseModule} from "angularfire2/database";
import {  FormsModule } from "@angular/forms";
import { OrderModule } from 'ngx-order-pipe';

import { AppComponent } from './app.component';
import { ArticulosComponent } from './articulos/articulos.component';
import { ArticuloComponent } from './articulos/articulo/articulo.component';
import { ArticuloListaComponent } from './articulos/articulo-lista/articulo-lista.component';
import { environment } from "../environments/environment";
import { ArticulosKpiComponent } from './articulos/articulos-kpi/articulos-kpi.component';


@NgModule({
  declarations: [
    AppComponent,
    ArticulosComponent,
    ArticuloComponent,
    ArticuloListaComponent,
    ArticulosKpiComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    FormsModule,
    OrderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
