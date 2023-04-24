import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs';
import { Categoria } from '../model/categoria';


@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  constructor( private Http: HttpClient ) {


   }

   apiUrl: string = 'http://localhost:3000/';

   getAllCategorias(): Observable<Categoria[]>{
    return this.Http.get<Categoria[]>(this.apiUrl + 'categorias')
  }

  getCategoriasById(id:number) : Observable<Categoria>{
    return this.Http.get<Categoria>(this.apiUrl + 'categorias/' + id)
  }


}
