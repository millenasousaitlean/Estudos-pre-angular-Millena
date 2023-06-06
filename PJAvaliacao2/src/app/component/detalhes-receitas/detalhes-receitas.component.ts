import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Categorias } from 'src/app/model/categorias';
import { Ingredientes } from 'src/app/model/ingredientes';
import { ModoPreparo } from 'src/app/model/modo-preparo';
import { Receitas } from 'src/app/model/receitas';
import { ReceitasService } from 'src/app/service/receitas.service';


@Component({
  selector: 'app-detalhes-receitas',
  templateUrl: './detalhes-receitas.component.html',
  styleUrls: ['./detalhes-receitas.component.scss']
})
export class DetalhesReceitasComponent implements OnInit {

  receitas: Receitas = {
    id: '',
    titulo: '',
    destaque: true,
    resumo: '',
    imagem: '',
    rendimento: 0,
    tempoPreparo: 0,
    categoria: 0,
    dificuldade: 0,
    dataPublicacao: '',

    ingredientes: [],
    modoPreparo: []
  }

  ingredientes: Ingredientes[] = []

  modoPreparo: ModoPreparo[] = []

  categorias: Categorias[] = []

  idDaUrl: string = ''

  receitasRand: Receitas[] = []

  receitaSelecionada: Receitas = {
    id: '',
    titulo: '',
    destaque: true,
    resumo: '',
    imagem: '',
    rendimento: 0,
    tempoPreparo: 0,
    categoria: 0,
    dificuldade: 0,
    dataPublicacao: '',

    ingredientes: [],
    modoPreparo: []
  }

  categoriaSelecionada: number = 0

  carregaRec: number = 0

  idDaCoisa: string = ''

  idDaCateg: number = 0

  constructor(
    private rotaAtiva: ActivatedRoute,
    private router: Router,
    private apiReceitas: ReceitasService,
  ) { }

  // USADO PARA QUE AS INFORMAÇÕES SEJAM GERADAS NA PAGINA PUXA DAS FUNCTIONS
  ngOnInit(): void {
    this.idDaUrl = this.rotaAtiva.snapshot.params['id']
    this.idDaCateg = this.rotaAtiva.snapshot.params['idCategCoisa']
    this.ngOnChange()
    this.sorteReceita()
    ActivatedRoute
  }

  // PARA QUE AS RECEITAS DOS CARDS SEJAM COM O MESMO 
  ngOnChange(): void {
    this.rotaAtiva.params.subscribe((params) => {
      this.idDaUrl = params['id']
      this.mostrarReceitas()
      // this.mudarOrdenar()

    })
  }

  // PARA MOSTRAR AS INFOS DAS RECEITAS, E ORDENAR NUMERICAMENTE O MODO DE PREPARO
  mostrarReceitas(): void {
    this.apiReceitas.getReceitasById(this.idDaUrl).subscribe((info) => {
      this.receitaSelecionada = info
    })
    this.apiReceitas.getReceitasById(this.idDaUrl).subscribe((data) => {
      this.receitas = data
      this.sorteReceita()

      this.receitas.modoPreparo.sort((a: ModoPreparo, b: ModoPreparo) => {
        return a.passo - b.passo
      })




      // let encontrarItem = data.find((data: Receitas) =>
      //   data.id == this.idDaUrl)
      // console.log(encontrarItem)
      // let ordenaItens = encontrarItem?.modoPreparo.sort((a: ModoPreparo, b: ModoPreparo) => {
      //   return a.passo - b.passo
      // }
      // )
    })
  }


  // SORTEAR OS CARDS ALEATORIAMENTE E PUXAR DA MESMA CATEGORIA DA RECEITA DA PAGINA
  // sorteReceita(data: Receitas[]): void {
  //   let filCateg = data.filter((receitas: Receitas) => receitas.categoria == this.idDaCateg)
  //   while (this.receitasAleatorias.length < 3) {
  //     let receitasRandom = Math.floor(Math.random() * filCateg.length)
  //     console.log(receitasRandom,"aqui")
  //     let selctReceita = this.receitasAleatorias.find((recVariavel: Receitas) => recVariavel == filCateg[receitasRandom])
  //     if ((selctReceita == undefined) && (filCateg[receitasRandom].id != this.idDaUrl)) {
  //       this.receitasAleatorias.push(filCateg[receitasRandom])
  //     }

  //   }
  // }


  // FORMA PARA DEIXAR OS CARDS EM ALEATORIO 

  sorteReceita(): void {
    this.apiReceitas.getAllReceitas().subscribe((data) => {
      let receitasAleatorias: Receitas[] = []
      this.receitasRand = []
      for (let receitasFil of data) {
        if (receitasFil.categoria == this.idDaCateg) {
          receitasAleatorias.push(receitasFil)
        }
       
      }
      for (let i = 0; i < 3; i++) {
        let n = Math.floor(Math.random() * receitasAleatorias.length)
        let rec = receitasAleatorias.splice(n, 1)[0]
        if (rec.id == this.receitaSelecionada.id) {
          n = Math.floor(Math.random() * receitasAleatorias.length)
          rec = receitasAleatorias.splice(n, 1)[0]
        }
        this.receitasRand.push(rec)
      }
    })
  }

  // mudarOrdenar(data: Receitas[]): void {
  //   let encontrarItem = data.find((data: Receitas) =>
  //     data.id == this.idDaUrl)
  //   console.log(encontrarItem)
  //   let ordenaItens = encontrarItem?.modoPreparo.sort((a: ModoPreparo, b: ModoPreparo) => {
  //     return a.passo - b.passo
  //   }
  //   )
  // }

  MudarReceita(id: string) {
    console.log(id)
    this.apiReceitas.getReceitasById(id).subscribe((data) => {
      this.receitaSelecionada = data
    })
    this.sorteReceita()
  }


}





