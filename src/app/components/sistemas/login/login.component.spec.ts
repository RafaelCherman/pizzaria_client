import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import {FormsModule} from "@angular/forms";
import {By} from "@angular/platform-browser";

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [HttpClientTestingModule, FormsModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    });
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have the login input field', () => {
    const loginInput = fixture.debugElement.query(By.css('input[name="login"]'));
    expect(loginInput).toBeTruthy();
  });

  it('should have the senha input field', () => {
    const senhaInput = fixture.debugElement.query(By.css('input[name="senha"]'));
    expect(senhaInput).toBeTruthy();
  });

  it('should have the Limpar button', () => {
    const limparButton = fixture.debugElement.query(By.css('input[name="limpar"]'));
    expect(limparButton).toBeTruthy();
  });

  it('should have the Acessar button', () => {
    const acessarButton = fixture.debugElement.query(By.css('input[name="logar"]'));
    expect(acessarButton).toBeTruthy();
  });

  it('should have the "Fazer cadastro" link', () => {
    const cadastroLink = fixture.debugElement.query(By.css('a'));
    expect(cadastroLink).toBeTruthy();
  });


  // it('should call logar() method on form submit', () => {
  //   spyOn(component, 'logar');
  //   const form = fixture.debugElement.query(By.css('form'));
  //   form.triggerEventHandler('submit', null);
  //   fixture.detectChanges();  // Atualize as alterações no componente
  //   expect(component.logar).toHaveBeenCalled();
  // });

  it('should open modal on "Fazer cadastro" link click', () => {
    spyOn(component, 'cadastrar');
    const cadastroLink = fixture.debugElement.query(By.css('a'));
    cadastroLink.triggerEventHandler('click', null);
    expect(component.cadastrar).toHaveBeenCalled();
  });
});
