import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaboresComponent } from './sabores.component';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('SaboresComponent', () => {
  let component: SaboresComponent;
  let fixture: ComponentFixture<SaboresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SaboresComponent],
      imports: [HttpClientTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    });
    fixture = TestBed.createComponent(SaboresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain a "Cadastrar Novo" button', () => {
    const buttonElement = fixture.nativeElement.querySelector('input.btn-success');
    expect(buttonElement).toBeTruthy();
    expect(buttonElement.value).toContain('Cadastrar Novo');
  });

  it('should contain the "app-exibesabor" component', () => {
    const exibesaborComponent = fixture.nativeElement.querySelector('app-exibesabor');
    expect(exibesaborComponent).toBeTruthy();
  });

  it('should pass sabores and gerencia to "app-exibesabor"', () => {
    const appExibesabor = fixture.nativeElement.querySelector('app-exibesabor');
    expect(appExibesabor).toBeTruthy();
    expect(appExibesabor.sabores).toEqual(component.sabores);
    expect(appExibesabor.gerencia).toEqual(true);
  });



});
