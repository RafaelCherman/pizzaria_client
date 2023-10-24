import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GerenciaprodutoComponent } from './gerenciaproduto.component';

describe('GerenciaprodutoComponent', () => {
  let component: GerenciaprodutoComponent;
  let fixture: ComponentFixture<GerenciaprodutoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GerenciaprodutoComponent]
    });
    fixture = TestBed.createComponent(GerenciaprodutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
