import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidoselecionarpizzaComponent } from './pedidoselecionarpizza.component';

describe('PedidoselecionarpizzaComponent', () => {
  let component: PedidoselecionarpizzaComponent;
  let fixture: ComponentFixture<PedidoselecionarpizzaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PedidoselecionarpizzaComponent]
    });
    fixture = TestBed.createComponent(PedidoselecionarpizzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
