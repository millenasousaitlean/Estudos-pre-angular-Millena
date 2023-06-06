import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor( private http: HttpClient ) { }

  readonly apiUrl: string = 'https://jsonplaceholder.typicode.com/'


  // Comments

  getTodosUsuarios(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl + 'users')
  } 

  getUsuariosPeloId(id: number): Observable<User> {
    return this.http.get<User>(this.apiUrl + 'users/' + id)
  } 
}
