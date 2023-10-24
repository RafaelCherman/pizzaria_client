import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexadminComponent } from './indexadmin.component';

describe('IndexadminComponent', () => {
  let component: IndexadminComponent;
  let fixture: ComponentFixture<IndexadminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IndexadminComponent]
    });
    fixture = TestBed.createComponent(IndexadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
