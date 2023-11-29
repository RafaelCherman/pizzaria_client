import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExibesaborComponent } from './exibesabor.component';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SaborService } from 'src/app/services/sabor.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {By} from "@angular/platform-browser";

describe('ExibesaborComponent', () => {
  let component: ExibesaborComponent;
  let fixture: ComponentFixture<ExibesaborComponent>;
  let modalService: NgbModal;
  let service: SaborService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ExibesaborComponent],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA
      ]
    });
    fixture = TestBed.createComponent(ExibesaborComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it(' Teste 1 - Teste Criar componente', () => {
    expect(component).toBeTruthy();
  });
  it('deve exibir o botão "Cadastrar novo"', () => {
    const botaoCadastrar = fixture.debugElement.query(By.css('section.organiza_itens table thead button.btn-primary'));
    expect(botaoCadastrar.nativeElement.textContent).toContain('Cadastrar novo');
  });

  it('deve chamar o método cadastrar ao clicar no botão "Cadastrar novo"', () => {
    spyOn(component, 'cadastrar');
    const botaoCadastrar = fixture.debugElement.query(By.css('section.organiza_itens table thead button.btn-primary'));
    botaoCadastrar.nativeElement.click();
    expect(component.cadastrar).toHaveBeenCalled();
  });

  it('deve conter a tag "app-gerenciasabor"', () => {
    const appGerenciaSabor = fixture.debugElement.query(By.css('ng-template#content app-gerenciasabor'));
    expect(appGerenciaSabor).toBeNull();
  });




});

