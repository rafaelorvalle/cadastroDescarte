import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DisponibilidadeService {

  constructor() { }

  diasDisponiveis: string[] = [];
  enderecoDigitado: string = '';

  adicionarDiaDisponivel(dia: string) {
    // Verifica se o dia já está na lista antes de adicionar
    if (!this.diasDisponiveis.includes(dia)) {
      this.diasDisponiveis.push(dia);
      console.log(`Você clicou em ${dia}`);
    }
  }

  removerDiaDisponivel(dia: string) {
    const index = this.diasDisponiveis.indexOf(dia);
    if (index !== -1) {
      this.diasDisponiveis.splice(index, 1);
    }
  }

  obterDiasDisponiveis() {
    return this.diasDisponiveis;
  }

  diaClicado(dia: string): boolean {
    return this.diasDisponiveis.includes(dia);
  }

  adicionarEndereco(endereco: string): void {
    this.enderecoDigitado = endereco;
    console.log(`Você digitou ${endereco}`)
  }

}
