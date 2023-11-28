import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipopizzalistComponent } from './tipopizzalist.component';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('TipopizzalistComponent', () => {
  let component: TipopizzalistComponent;
  let fixture: ComponentFixture<TipopizzalistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TipopizzalistComponent],
      imports: [HttpClientTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    });
    fixture = TestBed.createComponent(TipopizzalistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
