import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GerenciatipoComponent } from './gerenciatipo.component';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('GerenciatipoComponent', () => {
  let component: GerenciatipoComponent;
  let fixture: ComponentFixture<GerenciatipoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GerenciatipoComponent],
      imports: [HttpClientTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    });
    fixture = TestBed.createComponent(GerenciatipoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
