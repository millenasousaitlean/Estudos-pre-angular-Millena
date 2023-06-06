import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Albums } from '../model/albums';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {

  constructor(private http: HttpClient) { }

  readonly apiUrl: string = 'https://jsonplaceholder.typicode.com/'


  // Albums

  getTodosAlbuns(): Observable<Albums[]> {
    return this.http.get<Albums[]>(this.apiUrl + 'albums')
  }

  getAlbumsPeloId(id: number): Observable<Albums> {
    return this.http.get<Albums>(this.apiUrl + 'albums/' + id)
  }


}
