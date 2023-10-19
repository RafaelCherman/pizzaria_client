import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidoselecionarprodutoComponent } from './pedidoselecionarproduto.component';

describe('PedidoselecionarprodutoComponent', () => {
  let component: PedidoselecionarprodutoComponent;
  let fixture: ComponentFixture<PedidoselecionarprodutoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PedidoselecionarprodutoComponent]
    });
    fixture = TestBed.createComponent(PedidoselecionarprodutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
