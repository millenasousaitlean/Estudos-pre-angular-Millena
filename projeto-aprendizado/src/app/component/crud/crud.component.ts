import { Component, OnInit } from '@angular/core';
import { ProdutosService } from 'src/app/service/crud/produtos.service';
import { Produto } from 'src/app/model/crud/produto';



@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.scss']
})
export class CrudComponent implements OnInit {

  // VARIAVEIS

  produtos: Produto[] = [];

  produtoCriado: Produto = {
    id: 0,
    nomeProduto: '',
    precoProduto: 0,
    estoqueProduto: 0
  }


  constructor(private apiProduto: ProdutosService) {

  };

  ngOnInit(): void {
    this.pegarProdutos()

  }

  pegarProdutos(): void {
    this.apiProduto.getTodosProdutos().subscribe((data) => {
      this.produtos = data
    })
  }

  validateProduto(): void {
    if (this.produtoCriado.nomeProduto.trim().length == 0) {
      alert('Produto inválido!')
      return
    } else if (this.produtoCriado.precoProduto == 0) {
      alert('Produto invalido!')
      return
    } else if (this.produtoCriado.estoqueProduto != Math.floor(this.produtoCriado.estoqueProduto) && this.produtoCriado.estoqueProduto == 0) {
      alert('Produto inválido!')
      return
    } else if ( this.produtoCriado.id == 0 ){
      this.insereProduto()
    }else {
      this.editarProdutos(this.produtoCriado)
    }
  }

  insereProduto(): void {
    this.apiProduto.postNovoProduto(this.produtoCriado).subscribe((resp) => {
      alert('Produto Inserido')
      this.pegarProdutos
    })
  }

  selecionarProduto(id: number): void {
    this.apiProduto.getProdutosPorId(id).subscribe((data) => {
      this.produtoCriado = data
      this.pegarProdutos()
      this.deletarProduto(id)
    })
  }

  deletarProduto(id: number): void {
    this.apiProduto.deleteProduto(id).subscribe((data) => {
      this.produtoCriado = data
      this.pegarProdutos()
    })
  }

  pegarInfosEdicao(id: number): void {
    this.apiProduto.getProdutosPorId(id).subscribe((data) => {
      this.produtoCriado = data
      this.pegarProdutos()
    })
  }

  editarProdutos(prod: Produto): void {
    this.apiProduto.putEditaProduto(prod).subscribe( (data) => {
      this.produtoCriado = data
      this.pegarProdutos()
    })
  }

}
