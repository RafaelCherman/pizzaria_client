import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientecriarComponent } from './clientecriar.component';

import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ClientecriarComponent', () => {
  let component: ClientecriarComponent;
  let fixture: ComponentFixture<ClientecriarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClientecriarComponent],
      imports: [HttpClientTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    });
    fixture = TestBed.createComponent(ClientecriarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();

  });

  it('render buttons', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('button')).toBeNull();
    expect(compiled.querySelector('input')).toBeTruthy();
    expect(compiled.querySelector('label')).toBeTruthy();
    expect(compiled.querySelector('div')).toBeTruthy();
  });



  });
