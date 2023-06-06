import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../../model/blog/post';
import { AutoresService } from './autores.service';


@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor( private http: HttpClient) { }

  readonly apiUrl: string = 'http://localhost:3000/';

  // POSTS
  getTodosPots(): Observable<Post[]> {
    return this.http.get<Post[]>(this.apiUrl + 'postagem')
  }

  getPostPeloId( id: number ): Observable<Post> {
    return this.http.get<Post>(this.apiUrl + 'postagem/' + id)
  }

   postCriarNovoPost( post: Post ): Observable<Post> {
    return this.http.post<Post>(this.apiUrl + 'postagem', post)
  }

  putEditarPublicacao(id: number, post: Post): Observable<Post> {
    return this.http.put<Post>(this.apiUrl + 'postagem/'+ id, post)
  }

  postCriarNovoComentario( post: Post ): Observable<Post> {
    return this.http.post<Post>(this.apiUrl + 'postagem/', post)
  }

  putEditarcomentario(post: Post): Observable<Post> {
    return this.http.put<Post>(this.apiUrl + 'postagem/'+ post.id, post)
  }

 
 



}
