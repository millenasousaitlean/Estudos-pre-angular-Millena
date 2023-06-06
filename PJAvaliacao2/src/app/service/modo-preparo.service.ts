import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs';
import { ModoPreparo } from '../model/modo-preparo';

@Injectable({
  providedIn: 'root'
})
export class ModoPreparoService {

  constructor( private Http: HttpClient ) {


  }

  apiUrl: string = 'http://localhost:3000/';

  getAllCategorias(): Observable<ModoPreparo[]>{
   return this.Http.get<ModoPreparo[]>(this.apiUrl + 'receitas')
 }

 getCategoriasById(id:number) : Observable<ModoPreparo>{
   return this.Http.get<ModoPreparo>(this.apiUrl + 'receitas/' + id)
 }
}
