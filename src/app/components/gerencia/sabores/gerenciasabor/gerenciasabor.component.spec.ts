import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GerenciasaborComponent } from './gerenciasabor.component';

describe('GerenciasaborComponent', () => {
  let component: GerenciasaborComponent;
  let fixture: ComponentFixture<GerenciasaborComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GerenciasaborComponent]
    });
    fixture = TestBed.createComponent(GerenciasaborComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
