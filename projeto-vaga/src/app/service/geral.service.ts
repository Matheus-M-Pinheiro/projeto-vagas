import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Categorias } from '../model/categorias/categorias';
import { Empresa } from '../model/empresa/empresa';
import { Vagas } from '../model/vagas/vagas';

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
  getEmpresaPorId(id: Number): Observable<Empresa>{
    return this.http.get<Empresa>(`${this.urlDaApi}/empresa/${id}`)
  }
  getVagas(): Observable<Vagas[]>{
    return this.http.get<Vagas[]>(`${this.urlDaApi}/vagas`) 
  }
  getVagaPorId(id: Number): Observable<Vagas>{
    return this.http.get<Vagas>(`${this.urlDaApi}/vagas/${id}`)
  }
  getVagaPorCategoria(id: number): Observable<Vagas[]>{
    return this.http.get<Vagas[]>(`${this.urlDaApi}/vagas?categoria=${id}`)
  }
  getVagaPorEmpresa(id: number): Observable<Vagas[]>{
    return this.http.get<Vagas[]>(`${this.urlDaApi}/vagas?empresa=${id}`)
  }
}
