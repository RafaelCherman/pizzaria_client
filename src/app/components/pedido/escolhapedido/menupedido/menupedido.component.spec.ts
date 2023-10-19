import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenupedidoComponent } from './menupedido.component';

describe('MenupedidoComponent', () => {
  let component: MenupedidoComponent;
  let fixture: ComponentFixture<MenupedidoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenupedidoComponent]
    });
    fixture = TestBed.createComponent(MenupedidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
