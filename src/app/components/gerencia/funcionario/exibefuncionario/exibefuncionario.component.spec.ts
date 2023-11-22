import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExibefuncionarioComponent } from './exibefuncionario.component';

describe('ExibefuncionarioComponent', () => {
  let component: ExibefuncionarioComponent;
  let fixture: ComponentFixture<ExibefuncionarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExibefuncionarioComponent]
    });
    fixture = TestBed.createComponent(ExibefuncionarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
