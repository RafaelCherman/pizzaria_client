import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { GerenciasaborComponent } from './gerenciasabor.component';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Sabor } from 'src/app/models/sabor';
import { ExibesaborComponent } from '../exibesabor/exibesabor.component';
import { By } from '@angular/platform-browser';
import { SaborService } from 'src/app/services/sabor.service';
/* 
describe('GerenciasaborComponent', () => {
  let component: GerenciasaborComponent;
  let fixture: ComponentFixture<GerenciasaborComponent>;



  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [GerenciasaborComponent],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA
      ]
    });
    fixture = TestBed.createComponent(GerenciasaborComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deve exibir mensagem de erro quando "erro" for verdadeiro', () => {
    component.erro = true;
    fixture.detectChanges();

    const divErro = fixture.debugElement.query(By.css('div.alert.alert-danger'));
    expect(divErro.nativeElement.textContent).toContain(component.mensagem);
  });

  it('não deve exibir mensagem de erro quando "erro" for falso', () => {
    component.erro = false;
    fixture.detectChanges();

    const divErro = fixture.debugElement.query(By.css('div.alert.alert-danger'));
    expect(divErro).toBeNull();
  });

  it('deve exibir mensagem de sucesso quando "sucesso" for verdadeiro', () => {
    component.sucesso = true;
    fixture.detectChanges();

    const divSucesso = fixture.debugElement.query(By.css('div.alert.alert-success'));
    expect(divSucesso.nativeElement.textContent).toContain(component.mensagem);
  });

  it('não deve exibir mensagem de sucesso quando "sucesso" for falso', () => {
    component.sucesso = false;
    fixture.detectChanges();

    const divSucesso = fixture.debugElement.query(By.css('div.alert.alert-success'));
    expect(divSucesso).toBeNull();
  });

  it('deve conter campos corretos para entrada de dados', () => {
    const inputs = fixture.debugElement.queryAll(By.css('div.row.d-flex.justify-content-center input.form-control'));
    expect(inputs.length).toBe(3);
    expect(inputs[0].nativeElement.getAttribute('id')).toBe('nome');
    expect(inputs[1].nativeElement.getAttribute('id')).toBe('ingredientes');
    expect(inputs[2].nativeElement.getAttribute('id')).toBe('valor_sabor');
  });

  it('deve chamar o método "voltar" ao clicar no botão "Voltar"', () => {
    spyOn(component, 'voltar');
    const botaoVoltar = fixture.debugElement.query(By.css('div.row.col-3 input.btn.btn-secondary'));
    botaoVoltar.nativeElement.click();
    expect(component.voltar).toHaveBeenCalled();
  });

  it('deve chamar o método "editar" ao clicar no botão "Editar" (quando opcaoBotao é Editar)', () => {
    component.opcaoBotao = 'Editar';
    spyOn(component, 'editar');
    const botaoEditar = fixture.debugElement.query(By.css('div.row.col-3 input.btn.btn-warning'));
    botaoEditar.nativeElement.click();
    expect(component.editar).toHaveBeenCalled();
  });

  it('deve chamar o método "cadastrar" ao clicar no botão "Cadastrar" (quando opcaoBotao é Cadastrar)', () => {
    component.opcaoBotao = 'Cadastrar';
    spyOn(component, 'cadastrar');
    const botaoCadastrar = fixture.debugElement.query(By.css('div.row.col-3 input.btn.btn-success'));
    botaoCadastrar.nativeElement.click();
    expect(component.cadastrar).toHaveBeenCalled();
  });

  it('deve chamar o método "excluir" ao clicar no botão "Excluir" (quando opcaoBotao é Excluir)', () => {
    component.opcaoBotao = 'Excluir';
    spyOn(component, 'excluir');
    const botaoExcluir = fixture.debugElement.query(By.css('div.row.col-3 input.btn.btn-danger'));
    botaoExcluir.nativeElement.click();
    expect(component.excluir).toHaveBeenCalled();
  });

});
*/