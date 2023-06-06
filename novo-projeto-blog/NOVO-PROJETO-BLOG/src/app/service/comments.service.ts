import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Comments } from '../model/comments';
import { Albums } from '../model/albums';


@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor( private http: HttpClient ) { }

  readonly apiUrl: string = 'https://jsonplaceholder.typicode.com/'


  // Comments

  getTodosComentarios(): Observable<Comments[]> {
    return this.http.get<Comments[]>(this.apiUrl + 'comments')
  } 

  getComentariosPeloId(id: number): Observable<Comments> {
    return this.http.get<Comments>(this.apiUrl + 'comments/' + id)
  } 



}
