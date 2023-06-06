import { Component, OnInit } from '@angular/core';
import { Departamento } from 'src/app/model/cms/departamento';
import { CmsService } from 'src/app/service/cms/cms.service';


@Component({
  selector: 'app-departamentos',
  templateUrl: './departamentos.component.html',
  styleUrls: ['./departamentos.component.scss']
})
export class DepartamentosComponent implements OnInit {

  departamentos: Departamento[] = []

  arrParaLista: string[] = []



  constructor(
    private apiCms: CmsService
  ){}


  ngOnInit(): void {

  }

  pegarDepartamentos(): void{
    this.apiCms.getAllDepartamentos().subscribe({
      next: (resposta) => {
        this.departamentos = resposta
        for(let depto of this.departamentos){
          this.arrParaLista.push(depto.departamento)
        }
      }, error: (erro) => {

      }
    })
  }




}
