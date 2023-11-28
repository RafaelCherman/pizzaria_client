import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderadminComponent } from './headeradmin.component';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('HeaderadminComponent', () => {
  let component: HeaderadminComponent;
  let fixture: ComponentFixture<HeaderadminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderadminComponent],
      imports: [HttpClientTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    });
    fixture = TestBed.createComponent(HeaderadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
