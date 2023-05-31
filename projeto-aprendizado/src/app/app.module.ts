import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// MODULE DE API
import { HttpClientModule } from '@angular/common/http'
// MODUKE DO NGMODEL
import { FormsModule } from '@angular/forms';
// MODULE DO FORMS
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrudComponent } from './component/crud/crud.component';
import { SideBarComponent } from './component/side-bar/side-bar.component';
import { BlogInternaComponent } from './component/blog/blog-interna/blog-interna.component';
import { BlogHomeComponent } from './component/blog/blog-home/blog-home.component';
import { CriarPostComponent } from './component/blog/criar-post/criar-post.component';
import { NavBarComponent } from './component/nav-bar/nav-bar.component';
import { PerfilPostComponent } from './component/blog/perfil-post/perfil-post.component';
import { CadastroComponent } from './component/blog/cadastro/cadastro.component';
import { LoginComponent } from './component/blog/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    CrudComponent,
    SideBarComponent,
    BlogInternaComponent,
    BlogHomeComponent,
    CriarPostComponent,
    NavBarComponent,
    PerfilPostComponent,
    CadastroComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
