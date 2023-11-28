import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GerenciaprodutoComponent } from './gerenciaproduto.component';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('GerenciaprodutoComponent', () => {
  let component: GerenciaprodutoComponent;
  let fixture: ComponentFixture<GerenciaprodutoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GerenciaprodutoComponent],
      imports: [HttpClientTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    });
    fixture = TestBed.createComponent(GerenciaprodutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
