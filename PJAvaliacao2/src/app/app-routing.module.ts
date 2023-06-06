import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './component/header/header.component';
import { HomeComponent } from './component/home/home.component';
import { InternaComponent } from './component/interna/interna.component';
import { DetalhesReceitasComponent } from './component/detalhes-receitas/detalhes-receitas.component';
import { FooterComponent } from './component/footer/footer.component';

const routes: Routes = [
  { path:"", component: HomeComponent },
  { path:"interna/:id", component: InternaComponent },
  { path:"detalhes-receitas/:id/:idCategCoisa", component: DetalhesReceitasComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
