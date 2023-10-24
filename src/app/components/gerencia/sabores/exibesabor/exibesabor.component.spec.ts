import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExibesaborComponent } from './exibesabor.component';

describe('ExibesaborComponent', () => {
  let component: ExibesaborComponent;
  let fixture: ComponentFixture<ExibesaborComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExibesaborComponent]
    });
    fixture = TestBed.createComponent(ExibesaborComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
