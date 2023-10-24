import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipopizzalistComponent } from './tipopizzalist.component';

describe('TipopizzalistComponent', () => {
  let component: TipopizzalistComponent;
  let fixture: ComponentFixture<TipopizzalistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TipopizzalistComponent]
    });
    fixture = TestBed.createComponent(TipopizzalistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
