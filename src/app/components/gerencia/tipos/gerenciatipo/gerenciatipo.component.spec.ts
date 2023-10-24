import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GerenciatipoComponent } from './gerenciatipo.component';

describe('GerenciatipoComponent', () => {
  let component: GerenciatipoComponent;
  let fixture: ComponentFixture<GerenciatipoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GerenciatipoComponent]
    });
    fixture = TestBed.createComponent(GerenciatipoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
