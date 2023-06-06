import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Departamento } from 'src/app/model/cms/departamento';
import { Produtos } from 'src/app/model/cms/produtos';
import { DepartamentosService } from 'src/app/service/cms/departamentos.service';
import { ProdutosService } from 'src/app/service/cms/produtos.service';


@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {

  @Input() conteudo: string[] = [];
  @Input() departamento: Departamento[] = [];
  @Input() produtos: Produtos[] = [];
  mostrarModalEdit: boolean = false
  mostrarModalAdd: boolean = false
  mostrarModalEditProd: boolean = false
  mostrarModalAddProd: boolean = false
  formDepart: FormGroup;
  formProd: FormGroup

  departamentoCriado: Departamento = {
    departamento: "",
    id: 0
  }

  produtosCriados: Produtos = {
    nome: "",
    preco: 0,
    estoque: 0,
    departamento: 0,
    descricao: "",
    imagem: "",
    id: 0
  }

  constructor(
    public router: Router,
    private apiDepart: DepartamentosService,
    private apiProd: ProdutosService,
  ) {
    this.formDepart = new FormGroup({
      departamento: new FormControl('', [Validators.required])
    })
    this.formProd = new FormGroup({
      nome: new FormControl('', [Validators.required]),
      preco: new FormControl('', [Validators.required]),
      estoque: new FormControl('', [Validators.required]),
      departamento: new FormControl('', [Validators.required]),
      descricao: new FormControl('', [Validators.required]),
      imagem: new FormControl('', [Validators.required]),
      id: new FormControl('', [Validators.required])
    })
  }
  ngOnInit(): void {
    this.mostrarDepartamentos(),
      this.mostrarProdutos()
  }

  mostraPeloIdDep(id: number): void {
    this.apiDepart.getDepartamentoPeloId(id).subscribe((dataId) => {
      this.departamentoCriado = dataId
      this.deletDepart(id)
      this.mostrarDepartamentos()
      this.editarDepartamento(id)
      // window.location.href = "http://localhost:4200/cms/departamentos"
    })
  }

  mostrarDepartamentos(): void {
    this.apiDepart.getAllDepartamentos().subscribe((dataDepart) => {
      this.departamento = dataDepart
    })
  }

  mostrarPeloIdProd(id: number): void {
    this.apiProd.getDepartamentoPeloId(id).subscribe((dataId) => {
      this.produtosCriados = dataId
      this.deletProdutos(id)
      this.mostrarProdutos()
      // window.location.href = "http://localhost:4200/cms/produtos"

    })
  }

  mostrarProdutos(): void {
    this.apiProd.getAllProdutos().subscribe((dataProd) => {
      this.produtos = dataProd
    })
  }



  nameDepart(id: number): string {
    for (let depe of this.departamento) {
      if (depe.id == id) {
        return depe.departamento
      }
    }

    return ""
  }


  addDepartamento(): void {
    let newDepart: Departamento = {
      departamento: this.formDepart.value.departamento,
      id: 0
    }
    this.apiDepart.postNewDepartamento(newDepart).subscribe((resp) => {
      alert('Novo departamento adicionado !')
      window.location.href = "http://localhost:4200/cms/departamentos"
    })
  }

  addProdutos(): void {
    let newProd: Produtos = {
      nome: this.formProd.value.produtos,
      preco: this.formProd.value.produtos,
      estoque: this.formProd.value.produtos,
      departamento: this.formProd.value.produtos,
      descricao: this.formProd.value.produtos,
      imagem: this.formProd.value.produtos,
      id: 0
    }
    this.apiProd.postNewProdutos(newProd).subscribe((resp) => {
      alert('Produto adicionado !')
      window.location.href = "http://localhost:4200/cms/produtos"
    })
  }

  // pegarInfosEdicao(id: number): void{
  //   this.apiDepart.getDepartamentoPeloId(id).subscribe((data) => {
  //     this.departamentoCriado = data
  //     this.mostraPeloIdDep(id)
  //   })
  // }

  editarDepartamento(id: number): void {
    let EditeDepart: Departamento = {
      departamento: this.formDepart.value.departamentoCriado.id,
      id: this.departamentoCriado.id
    }
    this.apiDepart.putEditarDepartamento(id).subscribe((data) => {
      this.departamentoCriado = data
      this.mostraPeloIdDep(id)
      alert('Alteração feita com sucesso !')
    })
  }

  openModalEdit(): void {
    this.mostrarModalEdit = true
  }

  openModalAdd(): void {
    this.mostrarModalAdd = true
  }
  openModalEditProd(): void {
    this.mostrarModalEditProd = true
  }

  openModalAddProd(): void {
    this.mostrarModalAddProd = true
  }

  closeModal(): void {
    this.mostrarModalEdit = false
    this.mostrarModalAdd = false
    this.mostrarModalEditProd = false
    this.mostrarModalAddProd = false
  }

  deletDepart(id: number): void {
    this.apiDepart.deletarDepartamento(id).subscribe((data) => {
      this.departamentoCriado = data

    })

  }

  deletProdutos(id: number): void {
    this.apiProd.deletarProdutos(id).subscribe((data) => {
      this.produtosCriados = data

    })

  }


}
