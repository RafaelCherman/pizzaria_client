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
});
