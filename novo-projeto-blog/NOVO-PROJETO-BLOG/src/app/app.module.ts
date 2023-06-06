import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { InternaComponent } from './component/interna/interna.component';
import { UsuariosComponent } from './component/usuarios/usuarios.component';
import { InternaUsuariosComponent } from './component/interna-usuarios/interna-usuarios.component';
import { BarraLateralComponent } from './component/barra-lateral/barra-lateral.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InternaComponent,
    UsuariosComponent,
    InternaUsuariosComponent,
    BarraLateralComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
