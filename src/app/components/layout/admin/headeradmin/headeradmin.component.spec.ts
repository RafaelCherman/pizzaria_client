import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderadminComponent } from './headeradmin.component';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import {RouterTestingModule} from "@angular/router/testing";

describe('HeaderadminComponent', () => {
  let component: HeaderadminComponent;
  let fixture: ComponentFixture<HeaderadminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderadminComponent],
      imports: [HttpClientTestingModule, RouterTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    });
    fixture = TestBed.createComponent(HeaderadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have the correct user name', () => {
    // Assuming you have a variable in your component like 'userName'

    fixture.detectChanges();
    const userNameElement = fixture.nativeElement.querySelector('h6');
    expect(userNameElement.textContent).toContain('Usuário: Admin');
  });

  it('should have the correct number of buttons with routerLinks', () => {
    const buttons = fixture.nativeElement.querySelectorAll('button[routerLink]');
    expect(buttons.length).toBe(5); // Adjust the number based on your actual buttons
  });
});
