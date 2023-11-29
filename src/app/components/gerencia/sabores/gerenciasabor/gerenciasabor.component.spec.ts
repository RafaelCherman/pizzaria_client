import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { GerenciasaborComponent } from './gerenciasabor.component';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Sabor } from 'src/app/models/sabor';
import { ExibesaborComponent } from '../exibesabor/exibesabor.component';
import { By } from '@angular/platform-browser';
import { SaborService } from 'src/app/services/sabor.service';

describe('GerenciasaborComponent', () => {
  let component: GerenciasaborComponent;
  let fixture: ComponentFixture<GerenciasaborComponent>;

  let saboresService: SaborService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [GerenciasaborComponent],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA
      ]
    });
    fixture = TestBed.createComponent(GerenciasaborComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  beforeEach(() => { //MOCANDO DADOS
    let sabor = new Sabor();
    sabor.id = 1;
    sabor.nome = 'Catupiry';
    component.sabor = sabor;
    fixture.detectChanges(); //refresh
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('Teste de 1 @Input - Interpolação no template', () => {
    let elemento = fixture.debugElement.query(By.css('input[id="nome"]'));
    expect(elemento.nativeElement.ngModel).toEqual('Catupiry');
  });


  it('Teste 2 de @Input - Interpolação no template', () => {
    let elemento = fixture.debugElement.query(By.css('input[id="nome"]'));
    expect(elemento.nativeElement.ngModel).not.toBe(null);
  });
 
});
