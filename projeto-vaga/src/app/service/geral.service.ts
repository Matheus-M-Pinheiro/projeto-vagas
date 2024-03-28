import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Categorias } from '../model/categorias/categorias';
import { Empresa } from '../model/empresa/empresa';
import { Vagas } from '../model/vagas/vagas';
import { RespostasQuestionario } from '../model/respostaQuestionario/respostas-questionario';
import { FazerLogin } from '../model/login/fazer-login';
import { Usuarios } from '../model/login/usuarios';

@Injectable({
  providedIn: 'root'
})
export class GeralService {

  constructor(private http: HttpClient) { }
  readonly urlDaApi: string = 'http://localhost:3000';
  //CATEGORIA
  getCategorias(): Observable<Categorias[]>{
    return this.http.get<Categorias[]>(`${this.urlDaApi}/categorias`) 
  }
  getCategoriaPorId(id: Number): Observable<Categorias>{
    return this.http.get<Categorias>(`${this.urlDaApi}/categorias/${id}`)
  }
  //EMORESA
  getEmpresas(): Observable<Empresa[]>{
    return this.http.get<Empresa[]>(`${this.urlDaApi}/empresa`) 
  }
  getEmpresaPorId(id: Number): Observable<Empresa>{
    return this.http.get<Empresa>(`${this.urlDaApi}/empresa/${id}`)
  }
  //VAGAS
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
  //QUESTIONARIO
  postRespostaQuestionario(resposta:RespostasQuestionario):Observable<RespostasQuestionario>{
    return this.http.post<RespostasQuestionario>(`${this.urlDaApi}/respostasQuestionario`,resposta)
  }
  //LOGIN
  fazerLogin(username: string, senha: string): Observable<FazerLogin[]>{
    return this.http.get<FazerLogin[]>(`${this.urlDaApi}/fazerLogin?username=${username}&senha=${senha}`) 
  }
  postCriaLogin(login: FazerLogin): Observable<FazerLogin>{
    return this.http.post<FazerLogin>(`${this.urlDaApi}/fazerLogin`, login)
  }
  getUsuarios(): Observable<Usuarios[]>{
    return this.http.get<Usuarios[]>(`${this.urlDaApi}/usuarios`)
  }
  getUsuarioPorId(id: Number): Observable<Usuarios>{
    return this.http.get<Usuarios>(`${this.urlDaApi}/usuarios/${id}`)
  }
  postCriaUsuario(usuario: Usuarios): Observable<Usuarios>{
    return this.http.post<Usuarios>(`${this.urlDaApi}/usuarios`, usuario)
  }
}
