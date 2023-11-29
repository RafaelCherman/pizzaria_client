import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExibesaborComponent } from './exibesabor.component';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SaborService } from 'src/app/services/sabor.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { of } from 'rxjs';
import { Sabor } from 'src/app/models/sabor';

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


  it('Teste 2 - existência da tag table', () =>{
    const html = fixture.nativeElement as HTMLElement;
    expect(html.querySelector('.container')?.textContent).toContain('table');
  });

  it('Teste 3 - exibir dados na tabela', () => {
    const sabores: Sabor[] = [
      { id: 1, nome: 'Sabor1', ingredientes: 'Ing1', valor: 10.0 },
      { id: 2, nome: 'Sabor2', ingredientes: 'Ing2', valor: 15.0 }
    ];
    spyOn(service, 'listAll').and.returnValue(of(sabores));
    fixture.detectChanges();

    const rows = fixture.debugElement.nativeElement.querySelectorAll('tbody tr');
    expect(rows.length).toBe(2);
    expect(rows[0].textContent).toContain('Sabor1');
    expect(rows[1].textContent).toContain('Sabor2');
  });

  it('Teste 4 - abrir modal ao clicar em "Editar"', () => {
    const openSpy = spyOn(modalService, 'open');
    const editarButton = fixture.debugElement.nativeElement.querySelector('.btn-primary.accion');
    editarButton.click();
    expect(openSpy).toHaveBeenCalledOnceWith(null, { size: 'xl' });  
  });

  it('Teste 5 - executar a função correta ao clicar em "Editar"', () => {
    const editarSpy = spyOn(component, 'editar');
    const editarButton = fixture.debugElement.nativeElement.querySelector('.btn-primary.accion');
    const mockSabor = { id: 1, nome: 'Sabor1', ingredientes: 'Ing1', valor: 10.0 };
    editarButton.click();
    expect(editarSpy).toHaveBeenCalledOnceWith(null, mockSabor);
  });

 

});

