import { Component, OnInit } from '@angular/core';
import { Produtos } from 'src/app/model/cms/produtos';
import { CmsService } from 'src/app/service/cms/cms.service';
import { ProdutosService } from 'src/app/service/cms/produtos.service';


@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.scss']
})
export class ProdutosComponent implements OnInit {

  produtos: Produtos[] = []

  arrParaLista: string[] = []

  constructor(
    private apiCms: CmsService,
    private apiProd: ProdutosService
  ){}


  ngOnInit(): void {

  }

  pegarProdutos(): void{
    this.apiProd.getAllProdutos().subscribe({
      next: (resposta) => {
        this.produtos = resposta
        for(let prod of this.produtos){
          this.arrParaLista.push(prod.nome)
        }
      }, error: (erro) => {
        
      }
    })
  }



}
