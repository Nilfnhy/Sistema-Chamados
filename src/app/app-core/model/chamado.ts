import {Status} from "./status";

export class Chamado
{
  id: number;
  titulo: string;
  dataCriacao: string;
  status: Status;
  nomeUser: string;
  descricao: string;
  local: string;

  constructor(id: number, titulo: string, dataCriacao: string, stat: Status, nomeUser: string,descricao: string, local: string)
  {
    this.id = id;
    this.titulo = titulo;
    this.dataCriacao = dataCriacao;
    this.status = stat;
    this.nomeUser = nomeUser;
    this.descricao = descricao;
    this.local = local;
  }
}
