import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Categorias } from 'src/app/model/categorias';
import { Ingredientes } from 'src/app/model/ingredientes';
import { ModoPreparo } from 'src/app/model/modo-preparo';
import { Receitas } from 'src/app/model/receitas';
import { ReceitasService } from 'src/app/service/receitas.service';



@Component({
  selector: 'app-interna',
  templateUrl: './interna.component.html',
  styleUrls: ['./interna.component.scss']
})
export class InternaComponent {

  receitas: Receitas[] = []

  ingredientes: Ingredientes[] = []

  modoPreparo: ModoPreparo[] = []

  categorias: Categorias[] = []

  mostrarReceita: number = 0;

  idDaUrl: number = 0

  categoriaSelecionada: number = 0;

  // NGCLASS A SER ATRIBUIDA NO NIVEL DE DIFICULDADE DA RECEITA
  verde = ['facil']
  amarelo = ['medio']
  vermelho = ['dificil']

  constructor(
    private router: Router,
    private rotaAtiva: ActivatedRoute,
    private apiReceitas: ReceitasService,
  ) { }

  // USADO PARA QUE AS INFORMAÇÕES SEJAM GERADAS NA PAGINA PUXA DAS FUNCTIONS
  ngOnInit(): void {
    this.mostrarReceitas()
    this.idDaUrl = this.rotaAtiva.snapshot.params['id']
  }

  // PARA MOSTRAR AS INFOS DAS RECEITAS, E ORDENAR EM ORDEM ALFABETICA AS RECEITAS 
  mostrarReceitas(): void {
    this.apiReceitas.getAllReceitas().subscribe((data) => {
      console.log(data)
      let dataSort = data.sort((a, b) => {
        return a.titulo.toLowerCase() > b.titulo.toLowerCase() ? 1 : -1
      })
      this.receitas = dataSort
    })
  }

  // PARA FILTRAR AS RECEITAS EM FACIL, MEDIO E DIFICIL A DEPENDER DA DIFICULDADE
  filtro(valor: number) {
    this.mostrarReceita = valor
    console.log('mostrarReceita')
  }
}
