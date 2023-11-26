import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DisponibilidadeService } from '../disponibilidade.service';

@Component({
  selector: 'app-coleta',
  templateUrl: './coleta.component.html',
  styleUrls: ['./coleta.component.css']
})
export class ColetaComponent implements OnInit {
  coletaForm: FormGroup;

  rangeValues = [8,17]

  constructor(private disponibilidadeService: DisponibilidadeService,
    private fb: FormBuilder) { this.coletaForm = this.fb.group({
      endereco: [''] // inicializa o FormControl para o endereço
    });}

  onClickDiaDisponivel(dia: string) {
    this.disponibilidadeService.adicionarDiaDisponivel(dia);
  }

  onClickDiaClicado(dia: string){
    this.disponibilidadeService.diaClicado(dia);
  }

  onClickSolicitarColeta(){
    const enderecoControl = this.coletaForm.get('endereco');
    if (enderecoControl) {
      const enderecoDigitado = enderecoControl.value;
      this.disponibilidadeService.adicionarEndereco(enderecoDigitado);
    }
  }

  ngOnInit(): void {
  }



}
