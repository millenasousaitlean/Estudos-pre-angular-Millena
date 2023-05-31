import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrudComponent } from './component/crud/crud.component';
import { SideBarComponent } from './component/side-bar/side-bar.component';
import { BlogHomeComponent } from './component/blog/blog-home/blog-home.component';
import { BlogInternaComponent } from './component/blog/blog-interna/blog-interna.component';
import { CriarPostComponent } from './component/blog/criar-post/criar-post.component';
import { PerfilPostComponent } from './component/blog/perfil-post/perfil-post.component';
import { LoginComponent } from './component/blog/login/login.component';
import { CadastroComponent } from './component/blog/cadastro/cadastro.component';

const routes: Routes = [
  {path: 'crud', component:CrudComponent},
  {path: 'blog', component:BlogHomeComponent},
  {path: 'blog/interna/:id', component:BlogInternaComponent},
  {path: 'blog/criar', component: CriarPostComponent},
  {path: 'blog/perfil/:id', component: PerfilPostComponent},
  {path: 'blog/login', component: LoginComponent},
  {path: 'blog/cadastro', component: CadastroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
