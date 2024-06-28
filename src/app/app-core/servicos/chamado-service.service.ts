import { Injectable } from '@angular/core';
import {Chamado} from "../model/chamado";
import {Status} from "../model/status";

@Injectable({
  providedIn: 'root'
})
export class ChamadoService
{
  private chamados: string[] = [];
  private chamadosTeste: Chamado[] = [];

  constructor() { }

  //Lógica referente ao chamado criado:

  addChamado(chamado: string)
  {
    this.chamados.push(chamado);
    console.log('Chamados Cadastrados: ', this.chamados);
  }

  popularTabelaTeste() : Chamado[]
  {
    let status: Status = new Status(0, 'Novo');

    let chamado: Chamado = new Chamado(0,
      'Prédio sem Rede',
      '24.05.2024',
      status,
      'Enzo',
      'Prédio está sem rede desde ontem. Favor, verificar problema.',
      'CEFD');

    let chamado2: Chamado = new Chamado(0,
      'PC não liga',
      '15.05.2024',
      status,
      'Dominic',
      'Computador da sala 1107 não inicializa.',
      'CCSH');

    this.chamadosTeste.push(chamado, chamado2);
    return this.chamadosTeste;
  }
}
