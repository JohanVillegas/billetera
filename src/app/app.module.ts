import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireModule } from "angularfire2";
import { AngularFireDatabaseModule} from "angularfire2/database";
import {  FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { ArticulosComponent } from './articulos/articulos.component';
import { ArticuloComponent } from './articulos/articulo/articulo.component';
import { ArticuloListaComponent } from './articulos/articulo-lista/articulo-lista.component';
import { environment } from "../environments/environment";
@NgModule({
  declarations: [
    AppComponent,
    ArticulosComponent,
    ArticuloComponent,
    ArticuloListaComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
