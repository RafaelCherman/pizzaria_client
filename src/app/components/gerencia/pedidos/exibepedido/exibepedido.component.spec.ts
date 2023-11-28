import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExibepedidoComponent } from './exibepedido.component';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ExibepedidoComponent', () => {
  let component: ExibepedidoComponent;
  let fixture: ComponentFixture<ExibepedidoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExibepedidoComponent],
      imports: [HttpClientTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    });
    fixture = TestBed.createComponent(ExibepedidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
