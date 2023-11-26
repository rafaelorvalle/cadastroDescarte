import { TestBed } from '@angular/core/testing';

import { DisponibilidadeService } from './disponibilidade.service';

describe('DisponibilidadeService', () => {
  let service: DisponibilidadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DisponibilidadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('deve adicionar um dia disponível', () => {
    const dia = 'seg';
    service.adicionarDiaDisponivel(dia);
    expect(service.obterDiasDisponiveis()).toContain(dia);
  });

  it('deve remover um dia disponível', () => {
    const dia = 'ter';
    service.adicionarDiaDisponivel(dia);
    service.removerDiaDisponivel(dia);
    expect(service.obterDiasDisponiveis()).not.toContain(dia);
  });
});
