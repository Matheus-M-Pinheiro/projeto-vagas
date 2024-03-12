import { Component, OnInit } from '@angular/core';
import { Categorias } from 'src/app/model/categorias/categorias';
import { GeralService } from 'src/app/service/geral.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-busca',
  templateUrl: './busca.component.html',
  styleUrls: ['./busca.component.scss']
})
export class BuscaComponent implements OnInit{
  categoria : Categorias = new Categorias()
  idDaUrl : number = 0
constructor(
  private api: GeralService,
  private rotaAtiva: ActivatedRoute,
){}
  ngOnInit(): void {
    this.idDaUrl = Number(this.rotaAtiva.snapshot.params['id'])
      this.pegaCategoriaId()
  }

  pegaCategoriaId(): void{
    this.api.getCategoriaPorId(this.idDaUrl).subscribe( (categorias) => {
      this.categoria = categorias
    })
  }
}
