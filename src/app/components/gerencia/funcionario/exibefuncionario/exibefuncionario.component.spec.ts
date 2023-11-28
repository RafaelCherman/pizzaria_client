import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExibefuncionarioComponent } from './exibefuncionario.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

describe('ExibefuncionarioComponent', () => {
  let component: ExibefuncionarioComponent;
  let fixture: ComponentFixture<ExibefuncionarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExibefuncionarioComponent],
      imports: [HttpClientTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    });
    fixture = TestBed.createComponent(ExibefuncionarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
