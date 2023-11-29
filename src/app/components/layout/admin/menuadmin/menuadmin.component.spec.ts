import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuadminComponent } from './menuadmin.component';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('MenuadminComponent', () => {
  let component: MenuadminComponent;
  let fixture: ComponentFixture<MenuadminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuadminComponent],
      imports: [HttpClientTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    });
    fixture = TestBed.createComponent(MenuadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


});
