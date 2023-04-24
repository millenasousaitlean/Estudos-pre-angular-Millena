import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError} from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Noticia } from '../model/noticia'


@Injectable({
  providedIn: 'root'
})
export class NoticiaService {

  constructor( private Http: HttpClient ) { 

  }

  apiUrl: string = 'http://localhost:3000/';

  getAllNoticias(): Observable<Noticia[]>{
   return this.Http.get<Noticia[]>(this.apiUrl + 'noticias')
  }

  getNoticiaById(id:number) : Observable<Noticia>{
    return this.Http.get<Noticia>(this.apiUrl + 'noticias/' + id)
  }

}
