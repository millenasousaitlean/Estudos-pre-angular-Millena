import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs';
import { Ingredientes } from '../model/ingredientes';

@Injectable({
  providedIn: 'root'
})
export class IngredientesService {

  constructor( private Http: HttpClient ) {


  }

  apiUrl: string = 'http://localhost:3000/';

  getAllCategorias(): Observable<Ingredientes[]>{
   return this.Http.get<Ingredientes[]>(this.apiUrl + 'receitas')
 }

 getCategoriasById(id:number) : Observable<Ingredientes>{
   return this.Http.get<Ingredientes>(this.apiUrl + 'receitas/' + id)
 }
}
