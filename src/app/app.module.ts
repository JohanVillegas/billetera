import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from "@angular/http";

import { AngularFireModule } from "angularfire2";
import { AngularFireDatabaseModule} from "angularfire2/database";
import { AngularFireAuthModule } from 'angularfire2/auth';
import {  FormsModule } from "@angular/forms";
import { OrderModule } from 'ngx-order-pipe';

import { AppComponent } from './app.component';
import { ArticulosComponent } from './articulos/articulos.component';
import { ArticuloComponent } from './articulos/articulo/articulo.component';
import { ArticuloListaComponent } from './articulos/articulo-lista/articulo-lista.component';
import { environment } from "../environments/environment";
import { ArticulosKpiComponent } from './articulos/articulos-kpi/articulos-kpi.component';
import { LoginComponent } from './login/login.component';
import {Routes, RouterModule} from '@angular/router';
import { RegistroComponent } from './registro/registro.component';
import { AutorizacionService } from './services/autorizacion.service';
import { GuardService } from './services/guard.service';
const appRoutes: Routes = [
  {path:'articulos', component: ArticulosComponent},
  {path:'login',component: LoginComponent},
  {path:'registros',component: RegistroComponent, canActivate:[GuardService]}
];

@NgModule({
  declarations: [
    AppComponent,
    ArticulosComponent,
    ArticuloComponent,
    ArticuloListaComponent,
    ArticulosKpiComponent,
    LoginComponent,
    RegistroComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    FormsModule,
    OrderModule,
    RouterModule.forRoot(appRoutes),
    HttpModule
  ],
  providers: [AutorizacionService,GuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
