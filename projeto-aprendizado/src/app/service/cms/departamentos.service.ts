import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Departamento } from 'src/app/model/cms/departamento'; 




@Injectable({
  providedIn: 'root'
})
export class DepartamentosService {

  constructor( private http: HttpClient ) { }

  readonly apiUrl: string = 'http://localhost:3000/'


  getAllDepartamentos(): Observable<Departamento[]> {
    return this.http.get<Departamento[]>(`${this.apiUrl}departamentos/`)
  }

  getDepartamentoPeloId(id: number): Observable<Departamento> {
    return this.http.get<Departamento>(`${this.apiUrl}departamentos/${id}`)
  }

  postNewDepartamento(departamentos: Departamento): Observable<Departamento> {
    return this.http.post<Departamento>(`${this.apiUrl}departamentos`,departamentos)
  }

  putEditarDepartamento(id: number): Observable<Departamento>{
    return this.http.put<Departamento>(`${this.apiUrl}departamentos/${id}`, id)
  }

  deletarDepartamento(id: number):  Observable<Departamento>{
    return this.http.delete<Departamento>(`${this.apiUrl}departamentos/${id}`)
  } 

}
