import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Autor } from '../../model/blog/autor';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AutoresService {

  constructor( private http: HttpClient ) {  }

  readonly apiUrl: string = 'http://localhost:3000/';

   // AUTORES
   getTodosAutores(): Observable<Autor[]> {
    return this.http.get<Autor[]>(this.apiUrl + 'autores')
  }

  getAutoresPeloId( id: number ): Observable<Autor> {
    return this.http.get<Autor>(this.apiUrl + 'autores/' + id)
  }

  putEditarPerfil(autor: Autor): Observable<Autor> {
    return this.http.put<Autor>(this.apiUrl + 'autores/' + autor.id, autor)
  }
} 
