import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GerenciapedidoComponent } from './gerenciapedido.component';

describe('GerenciapedidoComponent', () => {
  let component: GerenciapedidoComponent;
  let fixture: ComponentFixture<GerenciapedidoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GerenciapedidoComponent]
    });
    fixture = TestBed.createComponent(GerenciapedidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
