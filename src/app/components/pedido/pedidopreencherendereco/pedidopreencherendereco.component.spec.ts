import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidopreencherenderecoComponent } from './pedidopreencherendereco.component';

describe('PedidopreencherenderecoComponent', () => {
  let component: PedidopreencherenderecoComponent;
  let fixture: ComponentFixture<PedidopreencherenderecoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PedidopreencherenderecoComponent]
    });
    fixture = TestBed.createComponent(PedidopreencherenderecoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
