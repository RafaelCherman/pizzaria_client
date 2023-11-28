import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenupedidoComponent } from './menupedido.component';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('MenupedidoComponent', () => {
  let component: MenupedidoComponent;
  let fixture: ComponentFixture<MenupedidoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenupedidoComponent],
      imports: [HttpClientTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    });
    fixture = TestBed.createComponent(MenupedidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
