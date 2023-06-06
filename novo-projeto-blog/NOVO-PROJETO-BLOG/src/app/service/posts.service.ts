import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Posts } from '../model/posts';
 

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor( private http: HttpClient) { }

  readonly apiUrl: string = 'https://jsonplaceholder.typicode.com/'


  // Posts

  getTodosPosts(): Observable<Posts[]> {
    return this.http.get<Posts[]>(this.apiUrl + 'posts')
  }

  getPostsPeloId(id: number): Observable<Posts> {
    return this.http.get<Posts>(this.apiUrl + 'posts/' + id)
  }



}
