import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExibeprodutoComponent } from './exibeproduto.component';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ExibeprodutoComponent', () => {
  let component: ExibeprodutoComponent;
  let fixture: ComponentFixture<ExibeprodutoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExibeprodutoComponent],
      imports: [HttpClientTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    });
    fixture = TestBed.createComponent(ExibeprodutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
