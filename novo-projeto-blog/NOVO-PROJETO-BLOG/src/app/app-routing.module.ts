import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { InternaComponent } from './component/interna/interna.component';
import { InternaUsuariosComponent } from './component/interna-usuarios/interna-usuarios.component';
import { UsuariosComponent } from './component/usuarios/usuarios.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'interna/posts/:id', component: InternaComponent},
  {path: 'usuarios', component: UsuariosComponent},
  {path: 'interna/usuarios/:id', component: InternaUsuariosComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
