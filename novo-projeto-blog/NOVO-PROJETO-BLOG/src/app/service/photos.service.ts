import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Photos } from '../model/photos';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  constructor( private http: HttpClient ) { }

  readonly apiUrl: string = 'https://jsonplaceholder.typicode.com/'


  // Comments

  getTodosPhotos(): Observable<Photos[]> {
    return this.http.get<Photos[]>(this.apiUrl + 'photos')
  } 

  getPhotosPeloId(id: number): Observable<Photos> {
    return this.http.get<Photos>(this.apiUrl + 'photos/' + id)
  } 

}
