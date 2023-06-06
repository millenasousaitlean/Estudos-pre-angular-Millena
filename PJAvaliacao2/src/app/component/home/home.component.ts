import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categorias } from 'src/app/model/categorias';
import { Ingredientes } from 'src/app/model/ingredientes';
import { ModoPreparo } from 'src/app/model/modo-preparo';
import { Receitas } from 'src/app/model/receitas';
import { CategoriasService } from 'src/app/service/categorias.service';
import { ReceitasService } from 'src/app/service/receitas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  receitas: Receitas[] = []

  ingredientes: Ingredientes[] = []

  modoPreparo: ModoPreparo[] = []

  categorias: Categorias[] = []

  categoriaSelecionada: number = 0;


  constructor(
    private router: Router,
    private apiReceitas: ReceitasService,
    private apiCategorias: CategoriasService

  ) {}

  // USADO PARA QUE AS INFORMAÇÕES SEJAM GERADAS NA PAGINA PUXA DAS FUNCTIONS
  ngOnInit(): void {
    this.mostrarCategorias()
    this.mostrarReceitas()
  }

  // PARA MOSTRAR AS INFOS DAS RECEITAS
  mostrarReceitas(): void{
    this.apiReceitas.getAllReceitas().subscribe( (data) =>{
      console.log(data)
      this.receitas = data
    } )
  }

  // PARA MOSTRAR OS BOTOES DE CATEGORIAS NA TELA INICIAL 
  mostrarCategorias(): void{
    this.apiCategorias.getAllCategorias().subscribe( (data) =>{
      this.categorias = data
    } )
  }
}
