import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExibetipoComponent } from './exibetipo.component';

describe('ExibetipoComponent', () => {
  let component: ExibetipoComponent;
  let fixture: ComponentFixture<ExibetipoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExibetipoComponent]
    });
    fixture = TestBed.createComponent(ExibetipoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
