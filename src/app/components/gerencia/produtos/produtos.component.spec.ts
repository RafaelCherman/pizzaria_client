import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutosComponent } from './produtos.component';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import {By} from "@angular/platform-browser";

describe('ProdutosComponent', () => {
  let component: ProdutosComponent;
  let fixture: ComponentFixture<ProdutosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProdutosComponent],
      imports: [HttpClientTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    });
    fixture = TestBed.createComponent(ProdutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('deve exibir o botão "Cadastrar Novo"', () => {
    const botaoCadastrar = fixture.debugElement.query(By.css('div > input.btn-success'));
    expect(botaoCadastrar.nativeElement.value).toBe('Cadastrar Novo');
  });

  it('deve chamar o método cadastrar ao clicar no botão "Cadastrar Novo"', () => {
    spyOn(component, 'cadastrar');
    const botaoCadastrar = fixture.debugElement.query(By.css('div > input.btn-success'));
    botaoCadastrar.nativeElement.click();
    expect(component.cadastrar).toHaveBeenCalled();
  });

  it('deve conter a tag "app-exibeproduto"', () => {
    const appExibeProduto = fixture.debugElement.query(By.css('div > app-exibeproduto'));
    expect(appExibeProduto).toBeTruthy();
  });

  // it('deve passar corretamente os parâmetros para o componente "app-exibeproduto"', () => {
  //   const produtos = []; // Defina seus produtos aqui
  //   component.produtos = produtos;
  //   fixture.detectChanges();
  //
  //   const appExibeProduto = fixture.debugElement.query(By.css('div > app-exibeproduto')).componentInstance;
  //   expect(appExibeProduto.produtos).toEqual(produtos);
  //   expect(appExibeProduto.gerencia).toBe(true);
  // });

});
