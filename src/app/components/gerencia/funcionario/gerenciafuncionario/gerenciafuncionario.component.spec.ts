import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GerenciafuncionarioComponent } from './gerenciafuncionario.component';

describe('GerenciafuncionarioComponent', () => {
  let component: GerenciafuncionarioComponent;
  let fixture: ComponentFixture<GerenciafuncionarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GerenciafuncionarioComponent]
    });
    fixture = TestBed.createComponent(GerenciafuncionarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
