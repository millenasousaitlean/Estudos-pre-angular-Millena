import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs';
import { Receitas } from '../model/receitas';

@Injectable({
  providedIn: 'root'
})
export class ReceitasService {

  constructor( private Http: HttpClient ) { 

  }

  apiUrl: string = 'http://localhost:3000/';

  getAllReceitas(): Observable<Receitas[]>{
    return this.Http.get<Receitas[]>(this.apiUrl + 'receitas')
  }

  getReceitasById(id:number) : Observable<Receitas>{
    return this.Http.get<Receitas>(this.apiUrl + 'receitas/' + id)
  }

}
