import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Produtos } from 'src/app/model/cms/produtos';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  constructor( private http: HttpClient ) { }

  readonly apiUrl: string = 'http://localhost:3000/'


  getAllProdutos(): Observable<Produtos[]> {
    return this.http.get<Produtos[]>(`${this.apiUrl}produtos`)
  }

  getDepartamentoPeloId(id: number): Observable<Produtos> {
    return this.http.get<Produtos>(`${this.apiUrl}produtos/${id}`)
  }

  postNewProdutos(produtos: Produtos): Observable<Produtos> {
    return this.http.post<Produtos>(`${this.apiUrl}produtos`,produtos)
  }

  putEditarProdutos(id: number): Observable<Produtos>{
    return this.http.put<Produtos>(`${this.apiUrl}produtos/${id}`, id)
  }

  deletarProdutos(id: number):  Observable<Produtos>{
    return this.http.delete<Produtos>(`${this.apiUrl}produtos/${id}`)
  } 

}
