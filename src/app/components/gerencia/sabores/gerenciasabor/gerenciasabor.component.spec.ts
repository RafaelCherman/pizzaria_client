import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GerenciasaborComponent } from './gerenciasabor.component';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Sabor } from 'src/app/models/sabor';

describe('GerenciasaborComponent', () => {
  let component: GerenciasaborComponent;
  let fixture: ComponentFixture<GerenciasaborComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GerenciasaborComponent],
      imports: [HttpClientTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    });
    fixture = TestBed.createComponent(GerenciasaborComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  beforeEach(() => {
    let sabor: Sabor = new Sabor();
    sabor.nome = "calabresa";
    component.objetoEnviado = sabor;
    fixture.detectChanges();
  });
});
