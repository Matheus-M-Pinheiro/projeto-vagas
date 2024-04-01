import { Component, OnInit } from '@angular/core';
import { GeralService } from 'src/app/service/geral.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Vagas } from 'src/app/model/vagas/vagas';
import { Salario } from 'src/app/model/vagas/salario';
import { Local } from 'src/app/model/vagas/local';
import { Expediente } from 'src/app/model/vagas/expediente';
import { Empresa } from 'src/app/model/empresa/empresa';
import { Categorias } from 'src/app/model/categorias/categorias';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit{
formVagas : FormGroup
salario: Salario[] = [{min:0,max:0}]
lugar : Local[]= [{estado:'',cidade:''}]
expediente : Expediente[]= []
empresa: Empresa[]= []
categoria: Categorias[]=[]

constructor(
  private api : GeralService
){
  this.formVagas = new FormGroup({
    vaga: new FormControl('', [Validators.required]),
    empresa: new FormControl('', [Validators.required]),
    categoria: new FormControl('', [Validators.required]),
    min: new FormControl('', [Validators.required]),
    max: new FormControl('', [Validators.required]),
    quantidade: new FormControl('', [Validators.required]),
    estado: new FormControl('', [Validators.required]),
    cidade: new FormControl('', [Validators.required]),
    publicacao: new FormControl('', [Validators.required]),
    descricao: new FormControl('', [Validators.required]),
    dias: new FormControl('', [Validators.required]),
    inicio: new FormControl('', [Validators.required]),
    fim: new FormControl('', [Validators.required]),
    contratacao: new FormControl('', [Validators.required]),
    infosAdicionais: new FormControl('', [Validators.required]),
    

    
  })
}
  ngOnInit(): void {
    this.pegaEmpresas()
    this.pegaCategorias()
  }
  pegaCategorias(): void{
    this.api.getCategorias().subscribe( (categorias) => {
      this.categoria = categorias
    })
  }
  pegaEmpresas(): void{
    this.api.getEmpresas().subscribe( (empresas) => {
      this.empresa = empresas
    })
  }
  criaVaga(): void {
    let vagaNova = new Vagas()
   vagaNova.vaga= this.formVagas.value.vaga
   vagaNova.empresa= this.formVagas.value.empresa
   vagaNova.categoria = this.formVagas.value.categoria
  //  vagaNova.min = this.salario[0].min
  //  vagaNova.max = this.salario[0].max
   vagaNova.quantidade = this.formVagas.value.quantidade
   vagaNova.publicacao = this.formVagas.value.publicacao
   vagaNova.descricao = this.formVagas.value.descricao
  //  vagaNova.dias = this.formVagas.value.dias
  //  vagaNova.inicio = this.formVagas.value.inicio
  //  vagaNova.fim = this.formVagas.value.fim
   vagaNova.contratacao = this.formVagas.value.contratacao
   vagaNova.infosAdicionais = this.formVagas.value.infosAdicionais


  //   for(let salarios of this.salario){
  //     let sal = new Salario
  //  sal.min = salarios.min
  //  sal.max = salarios.max
   
  //     vagaNova.salario.push(sal)
  //   }


    for(let lugar of this.lugar){
      let lug = new Local
      lug.cidade = this.formVagas.value.cidade
      lug.estado = this.formVagas.value.estado

      // vagaNova.local.push(lug)

      
    }
     
        let exp = new Expediente
        exp.dias = this.formVagas.value.dias
        exp.fim = this.formVagas.value.fim
        exp.inicio=  this.formVagas.value.inicio

        // vagaNova.expediente.push(exp)
       
    

      this.api.criarVaga( vagaNova ).subscribe( (data) => {
        alert('Postagem criada!')
      })
    

    




  }
}
