import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs';
import { Categorias } from '../model/categorias';



@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  constructor( private Http: HttpClient ) { 

  }

  apiUrl: string = 'http://localhost:3000/';

  getAllCategorias(): Observable<Categorias[]>{
    return this.Http.get<Categorias[]>(this.apiUrl + 'categorias')
  }

  getCategoriasById(id:number) : Observable<Categorias>{
    return this.Http.get<Categorias>(this.apiUrl + 'categorias/' + id)
  }

  
}
