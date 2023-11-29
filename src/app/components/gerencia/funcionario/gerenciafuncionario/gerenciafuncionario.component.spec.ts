import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GerenciafuncionarioComponent } from './gerenciafuncionario.component';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('GerenciafuncionarioComponent', () => {
  let component: GerenciafuncionarioComponent;
  let fixture: ComponentFixture<GerenciafuncionarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GerenciafuncionarioComponent],
      imports: [HttpClientTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    });
    fixture = TestBed.createComponent(GerenciafuncionarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render alerts, inputs, and buttons correctly', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.alert.alert-danger')).toBeNull();
    expect(compiled.querySelector('.alert.alert-success')).toBeNull();
    expect(compiled.querySelector('input#nome')).toBeTruthy();
    expect(compiled.querySelector('input#tamanho')).toBeTruthy();
    const selectElement = compiled.querySelector('select.form-select');
    expect(selectElement).toBeTruthy();
    expect(selectElement.querySelectorAll('option').length).toBe(3);
    expect(compiled.querySelector('input[value="Voltar"]')).toBeTruthy();
    expect(compiled.querySelector('input[value="Editar"]')).toBeNull();
    expect(compiled.querySelector('input[value="Cadastrar"]')).toBeTruthy();
    expect(compiled.querySelector('input[value="Excluir"]')).toBeTruthy();
  });

});


