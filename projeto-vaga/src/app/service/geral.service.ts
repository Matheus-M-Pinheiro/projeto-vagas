import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Categorias } from '../model/categorias/categorias';
import { Empresa } from '../model/empresa/empresa';

@Injectable({
  providedIn: 'root'
})
export class GeralService {

  constructor(private http: HttpClient) { }
  readonly urlDaApi: string = 'http://localhost:3000';
  
  getCategorias(): Observable<Categorias[]>{
    return this.http.get<Categorias[]>(`${this.urlDaApi}/categorias`) 
  }
  getCategoriaPorId(id: Number): Observable<Categorias>{
    return this.http.get<Categorias>(`${this.urlDaApi}/categorias/${id}`)
  }
  getEmpresas(): Observable<Empresa[]>{
    return this.http.get<Empresa[]>(`${this.urlDaApi}/empresa`) 
  }
}
