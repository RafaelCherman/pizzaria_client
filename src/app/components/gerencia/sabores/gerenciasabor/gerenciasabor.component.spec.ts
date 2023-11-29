import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { GerenciasaborComponent } from './gerenciasabor.component';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Sabor } from 'src/app/models/sabor';
import { ExibesaborComponent } from '../exibesabor/exibesabor.component';
import { By } from '@angular/platform-browser';
import { SaborService } from 'src/app/services/sabor.service';

describe('GerenciasaborComponent', () => {
  let component: GerenciasaborComponent;
  let fixture: ComponentFixture<GerenciasaborComponent>;

  let saboresService: SaborService;

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

  beforeEach(() => { //MOCANDO DADOS
    let sabor = new Sabor();
    sabor.id = 1;
    sabor.nome = 'Catupiry';
    component.sabor = sabor;
    fixture.detectChanges(); //refresh
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('Teste de 1 @Input - Interpolação no template', () => {
    let elemento = fixture.debugElement.query(By.css('input[id="nome"]'));
    expect(elemento.nativeElement.ngModel).toEqual('Catupiry');
  });


  it('Teste 2 de @Input - Interpolação no template', () => {
    let elemento = fixture.debugElement.query(By.css('input[id="nome"]'));
    expect(elemento.nativeElement.ngModel).not.toBe(null);
  });

  beforeEach(() => {
    saboresService = TestBed.inject(SaborService);
  });

  it('deve chamar o método save ao enviar o formulário', fakeAsync(() => { 
    let spy = spyOn(saboresService, 'save').and.callThrough();

    let form = fixture.debugElement.nativeElement.querySelector('form');
    form.dispatchEvent(new Event('ngSubmit')); 

    tick();
    fixture.detectChanges();
    expect(spy).toHaveBeenCalled();
  }));


  it('deve chamar o método save ao enviar o formulário passando objeto', fakeAsync(() => {
    let spy = spyOn(saboresService, 'save').and.callThrough();

    let sabor = new Sabor();
    sabor.nome = 'Catupiry';
    component.sabor = sabor;
    fixture.detectChanges();

    let form = fixture.debugElement.nativeElement.querySelector('form');
    console.log(form);
    form.dispatchEvent(new Event('ngSubmit'));

    tick();
    fixture.detectChanges();
    expect(spy).toHaveBeenCalledWith(sabor);
  }));


  it('deve desativar os campos de entrada ao excluir', () => {
    component.opcaoBotao = 'Excluir';
    fixture.detectChanges();
    let nomeInput = fixture.debugElement.query(By.css('input[id="nome"]'));
    let tipoInput = fixture.debugElement.query(By.css('input[id="tipo"]'));
    let valorInput = fixture.debugElement.query(By.css('input[id="valor"]'));

    expect(nomeInput.nativeElement.disabled).toBe(true);
    expect(tipoInput.nativeElement.disabled).toBe(true);
    expect(valorInput.nativeElement.disabled).toBe(true);
  });

  it('deve ativar os campos de entrada em outras opções', () => {
    component.opcaoBotao = 'Editar';
    fixture.detectChanges();
    let nomeInput = fixture.debugElement.query(By.css('input[id="nome"]'));
    let tipoInput = fixture.debugElement.query(By.css('input[id="tipo"]'));
    let valorInput = fixture.debugElement.query(By.css('input[id="valor"]'));

    expect(nomeInput.nativeElement.disabled).toBe(false);
    expect(tipoInput.nativeElement.disabled).toBe(false);
    expect(valorInput.nativeElement.disabled).toBe(false);
  });

  it('deve chamar o método editar ao clicar no botão "Editar"', () => {
    let spy = spyOn(component, 'editar').and.callThrough();
    component.opcaoBotao = 'Editar';
    fixture.detectChanges();
    let editarButton = fixture.debugElement.query(By.css('.btn-warning'));
    editarButton.nativeElement.click();
    expect(spy).toHaveBeenCalled();
  });

  it('deve chamar o método cadastrar ao clicar no botão "Cadastrar"', () => {
    let spy = spyOn(component, 'cadastrar').and.callThrough();
    component.opcaoBotao = 'Cadastrar';
    fixture.detectChanges();
    let cadastrarButton = fixture.debugElement.query(By.css('.btn-success'));
    cadastrarButton.nativeElement.click();
    expect(spy).toHaveBeenCalled();
  });

  it('deve chamar o método excluir ao clicar no botão "Excluir"', () => {
    let spy = spyOn(component, 'excluir').and.callThrough();
    component.opcaoBotao = 'Excluir';
    fixture.detectChanges();
    let excluirButton = fixture.debugElement.query(By.css('.btn-danger'));
    excluirButton.nativeElement.click();
    expect(spy).toHaveBeenCalled();
  });

});
