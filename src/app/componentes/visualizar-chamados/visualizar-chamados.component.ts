import { Component, OnInit } from '@angular/core';
import {ChamadoService} from "../../app-core/servicos/chamado-service.service";
import {Chamado} from "../../app-core/model/chamado";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
declare var $ : any;

@Component({
  selector: 'app-visualizar-chamados',
  templateUrl: './visualizar-chamados.component.html',
  styleUrls: ['./visualizar-chamados.component.css']
})

export class VisualizarChamadosComponent implements OnInit {

  i: number = 0;
  chamados: Chamado [] = [];
  form: FormGroup;

  constructor(private chamadoService: ChamadoService, private fb: FormBuilder)
  {
    this.chamados = chamadoService.popularTabelaTeste();

    this.form = this.fb.group({
      titulo: ['', Validators.required],
      dataCriacao: ['', Validators.required],
      dataConclusao: ['', Validators.required],
      status: ['', Validators.required],
      nomeUser: ['', Validators.required],
      descricao: ['', Validators.required],
      local: ['', Validators.required]
    });
  }

  addChamado()
  {
    this.chamadoService.addChamado("Chamado " + this.i);
    this.i ++;
  }

  //Abrir interface de "Novo Chamado"
  openModal()
  {
    $('#add-chamado').modal('show');
  }

  //Fechar interface de "Novo Chamado"
  closeModal()
  {
    $('#add-chamado').modal('hide');
  }

  ngOnInit(): void {
  }

  //Salvar o chamado informado
  salvarFormChamado()
  {
    if(this.form.valid)
    {
      console.log("Dados do Novo Chamado: ", this.form.value);
      this.form.reset();
    } else
    {
      console.log("Campos inválidos encontrados.");
      console.log("Dados dos campos: ", this.form.value);
      this.marcarTodosComoClicados();
    }
  }

  //Verificar se a informação passada na caixa de texto se encontra nos parâmetros
  isCampoValido(inputNome: string) : boolean
  {
    const campo: any = this.form.get(inputNome);
    return campo && campo.touched && campo.invalid;
  }

  marcarTodosComoClicados()
  {
    Object.values(this.form.controls).forEach(campo =>{
      campo.markAsTouched();
    });
  }
}
