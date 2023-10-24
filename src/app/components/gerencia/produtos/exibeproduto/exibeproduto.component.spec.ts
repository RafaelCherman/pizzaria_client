import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExibeprodutoComponent } from './exibeproduto.component';

describe('ExibeprodutoComponent', () => {
  let component: ExibeprodutoComponent;
  let fixture: ComponentFixture<ExibeprodutoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExibeprodutoComponent]
    });
    fixture = TestBed.createComponent(ExibeprodutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
