import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExibesaborComponent } from './exibesabor.component';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ExibesaborComponent', () => {
  let component: ExibesaborComponent;
  let fixture: ComponentFixture<ExibesaborComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExibesaborComponent],
      imports: [HttpClientTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    });
    fixture = TestBed.createComponent(ExibesaborComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
