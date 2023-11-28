import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidocriarComponent } from './pedidocriar.component';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('PedidocriarComponent', () => {
  let component: PedidocriarComponent;
  let fixture: ComponentFixture<PedidocriarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PedidocriarComponent],
      imports: [HttpClientTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    });
    fixture = TestBed.createComponent(PedidocriarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
