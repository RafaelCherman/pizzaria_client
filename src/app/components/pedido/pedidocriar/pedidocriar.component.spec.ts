import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidocriarComponent } from './pedidocriar.component';

describe('PedidocriarComponent', () => {
  let component: PedidocriarComponent;
  let fixture: ComponentFixture<PedidocriarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PedidocriarComponent]
    });
    fixture = TestBed.createComponent(PedidocriarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
