import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExibeprodutoComponent } from './exibeproduto.component';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {By} from "@angular/platform-browser";
import {ActivatedRoute} from "@angular/router";

describe('ExibeprodutoComponent', () => {
  let component: ExibeprodutoComponent;
  let fixture: ComponentFixture<ExibeprodutoComponent>;
  let modalService: NgbModal;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExibeprodutoComponent],
      imports: [HttpClientTestingModule],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: { paramMap: { get: () => '1' } }
          }
        }
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    });
    fixture = TestBed.createComponent(ExibeprodutoComponent);
    component = fixture.componentInstance;
     modalService = TestBed.inject(NgbModal);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('deve criar o componente', () => {
    expect(component).toBeTruthy();
  });

  it('deve exibir botão "Cadastrar novo"', () => {
    const button = fixture.debugElement.query(By.css('.btn-primary'));
    expect(button.nativeElement.textContent.trim()).toBe('Cadastrar novo');
  });

  it('deve chamar o método cadastrar ao clicar no botão "Cadastrar novo"', () => {
    spyOn(component, 'cadastrar');
    const button = fixture.debugElement.query(By.css('.btn-primary'));
    button.nativeElement.click();
    expect(component.cadastrar).toHaveBeenCalled();
  });

  it('deve exibir a tabela com as colunas apropriadas', () => {
    component.lista = [
      { id: 1, nome: 'Produto1', tipo: 'Tipo1', preco: 10.0 },
      { id: 2, nome: 'Produto2', tipo: 'Tipo2', preco: 15.0 }
    ];
    fixture.detectChanges();

    const table = fixture.debugElement.query(By.css('table.table-hover'));
    expect(table).toBeTruthy();

    const colunasEsperadas = ['Cod.', 'Nome', 'Tipo', 'Valor', 'Ações'];
    const colunas = table.queryAll(By.css('thead th')).map(th => th.nativeElement.textContent.trim());

    expect(colunas).toEqual(colunasEsperadas);

    const linhas = table.queryAll(By.css('tbody tr'));
    expect(linhas.length).toBe(2);
  });

  it('deve chamar o método editar ao clicar no botão "Editar"', () => {
    spyOn(component, 'editar');
    component.lista = [{ id: 1, nome: 'Produto1', tipo: 'Tipo1', preco: 10.0 }];
    fixture.detectChanges();

    const botaoEditar = fixture.debugElement.query(By.css('.btn-primary.accion'));
    botaoEditar.nativeElement.click();
    expect(component.editar).toHaveBeenCalled();
  });

  it('deve chamar o método excluir ao clicar no botão "Excluir"', () => {
    spyOn(component, 'excluir');
    component.lista = [{ id: 1, nome: 'Produto1', tipo: 'Tipo1', preco: 10.0 }];
    fixture.detectChanges();

    const botaoExcluir = fixture.debugElement.query(By.css('.btn-danger.accion'));
    botaoExcluir.nativeElement.click();
    expect(component.excluir).toHaveBeenCalled();
  });

  it('deve exibir o modal ao clicar no botão "Editar"', () => {
    spyOn(modalService, 'open');
    component.lista = [{ id: 1, nome: 'Produto1', tipo: 'Tipo1', preco: 10.0 }];
    fixture.detectChanges();

    const botaoEditar = fixture.debugElement.query(By.css('.btn-primary.accion'));
    botaoEditar.nativeElement.click();
    expect(modalService.open).toHaveBeenCalled();
  });
});
