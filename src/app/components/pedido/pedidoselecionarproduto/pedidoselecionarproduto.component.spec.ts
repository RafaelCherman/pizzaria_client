import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidoselecionarprodutoComponent } from './pedidoselecionarproduto.component';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('PedidoselecionarprodutoComponent', () => {
  let component: PedidoselecionarprodutoComponent;
  let fixture: ComponentFixture<PedidoselecionarprodutoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PedidoselecionarprodutoComponent],
      imports: [HttpClientTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    });
    fixture = TestBed.createComponent(PedidoselecionarprodutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
