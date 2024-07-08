import { Injectable } from '@angular/core';
import {Chamado} from "../model/chamado";
import {Status} from "../model/status";

@Injectable({
  providedIn: 'root'
})
export class ChamadoService
{
  private chamados: string[] = [];

  constructor() { }

  addChamado(chamado: string)
  {
    this.chamados.push(chamado);
    console.log('Chamados Cadastrados: ', this.chamados);
  }

}
