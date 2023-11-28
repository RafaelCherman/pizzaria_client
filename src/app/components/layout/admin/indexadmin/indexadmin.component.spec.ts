import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexadminComponent } from './indexadmin.component';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('IndexadminComponent', () => {
  let component: IndexadminComponent;
  let fixture: ComponentFixture<IndexadminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IndexadminComponent],
      imports: [HttpClientTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    });
    fixture = TestBed.createComponent(IndexadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
