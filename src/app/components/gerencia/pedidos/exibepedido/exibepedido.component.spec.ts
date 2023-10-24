import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExibepedidoComponent } from './exibepedido.component';

describe('ExibepedidoComponent', () => {
  let component: ExibepedidoComponent;
  let fixture: ComponentFixture<ExibepedidoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExibepedidoComponent]
    });
    fixture = TestBed.createComponent(ExibepedidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
