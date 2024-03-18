import { Component, OnInit } from '@angular/core';
import { GeralService } from 'src/app/service/geral.service';
import { Vagas } from 'src/app/model/vagas/vagas';
import { ActivatedRoute } from '@angular/router';
import { Empresa } from 'src/app/model/empresa/empresa';

@Component({
  selector: 'app-interna',
  templateUrl: './interna.component.html',
  styleUrls: ['./interna.component.scss']
})
export class InternaComponent  implements OnInit{
  vaga: Vagas = new Vagas()
  idDaUrl : number = 0
  empresa : Empresa = new Empresa


  constructor(
    private api:GeralService,
    private rotaAtiva: ActivatedRoute,
  ){}
  ngOnInit(): void {
    this.idDaUrl = Number(this.rotaAtiva.snapshot.params['id'])
    this.pegaVagaId()
    this.pegaEmpresaId()
  }
  pegaVagaId(): void{
    this.api.getVagaPorId(this.idDaUrl).subscribe( (vagas) => {
      this.vaga = vagas
    })
  }
  converteHoras(isoData: string): string{
    let data = new Date(isoData)
    // 10/07/2023 10h45
    return `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()} `
  }
  pegaEmpresaId(): void{
    this.api.getEmpresaPorId(this.idDaUrl).subscribe( (empresas) => {
      this.empresa = empresas
    })
  }
}
