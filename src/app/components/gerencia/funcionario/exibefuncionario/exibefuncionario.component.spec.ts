import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExibefuncionarioComponent } from './exibefuncionario.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import {Funcionario} from "../../../../models/funcionario";
import {of} from "rxjs";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {FuncionarioService} from "../../../../services/funcionario.service";

describe('ExibefuncionarioComponent', () => {
  let component: ExibefuncionarioComponent;
  let fixture: ComponentFixture<ExibefuncionarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExibefuncionarioComponent],
      providers: [NgbModal],
      imports: [HttpClientTestingModule],
    });
    fixture = TestBed.createComponent(ExibefuncionarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain a table', () => {
    const tableElement: HTMLElement = fixture.nativeElement.querySelector('table');
    expect(tableElement).toBeTruthy();
  });

  it('should contain a button to add a new employee', () => {
    const addButton: HTMLButtonElement = fixture.nativeElement.querySelector('button.btn-primary');
    expect(addButton).toBeTruthy();
    expect(addButton.textContent).toContain('Cadastrar novo');
  });

  it('should display employee information in the table', () => {
    component.lista = [
      { id: 1, nome: 'Funcionario Teste', cpf: '12345678901', funcao: 'Atendente' },
      // Add more employees as needed for your test cases
    ];
    fixture.detectChanges();

    const tableRows: NodeListOf<HTMLTableRowElement> = fixture.nativeElement.querySelectorAll('tbody tr');
    <div class="card">
    <button type="button" class="btn btn-primary success" >Gerenciar Pedidos</button>

    <div class="organiza_itens">

    <button type="button" class="btn btn-primary" >Sabores</button>
      <button type="button" class="btn btn-primary" >Outros Produtos</button>
    <button type="button" class="btn btn-primary"
    routerLink="/admin/tipoDePizza"

      >Tipos de pizza</button>
    <button type="button" class="btn btn-primary" >Funcionários</button>
      </div>

    expect(tableRows.length).toBe(component.lista.length);

    tableRows.forEach((row, index) => {
      const employee = component.lista[index];
      expect(row.textContent).toContain(employee.id.toString());
      expect(row.textContent).toContain(employee.nome);
      expect(row.textContent).toContain(employee.cpf);
      expect(row.textContent).toContain(employee.funcao);
    });
  });

  it('should have buttons for editing and deleting each employee', () => {
    component.lista = [
      { id: 1, nome: 'Funcionario Teste', cpf: '12345678901', funcao: 'Atendente' },
      // Add more employees as needed for your test cases
    ];
    fixture.detectChanges();

    const actionButtons: NodeListOf<HTMLButtonElement> = fixture.nativeElement.querySelectorAll('tbody tr button');
    expect(actionButtons.length).toBe(component.lista.length * 2); // Two buttons per employee (Edit and Delete)

    actionButtons.forEach((button, index) => {
      const isEditButton = index % 2 === 0;
      const employeeIndex = Math.floor(index / 2);
      const employee = component.lista[employeeIndex];

      if (isEditButton) {
        expect(button.textContent).toContain('Editar');
      } else {
        expect(button.textContent).toContain('Excluir');
      }
    });
  });

  it('should open the modal when editing an employee', () => {
    spyOn(component.modalService, 'open');

    const employeeToEdit = { id: 1, nome: 'Funcionario Teste', cpf: '12345678901', funcao: 'Atendente' };
    component.editar(null, employeeToEdit);

    expect(component.modalService.open).toHaveBeenCalledOnceWith(null, { size: 'xl' });
  });

  it('should open the modal when deleting an employee', () => {
    spyOn(component.modalService, 'open');

    const employeeToDelete = { id: 1, nome: 'Funcionario Teste', cpf: '12345678901', funcao: 'Atendente' };
    component.excluir(null, employeeToDelete);

    expect(component.modalService.open).toHaveBeenCalledOnceWith(null, { size: 'xl' });
  });

  it('should open the modal when adding a new employee', () => {
    spyOn(component.modalService, 'open');

    component.cadastrar(null);

    expect(component.modalService.open).toHaveBeenCalledOnceWith(null, { size: 'xl' });
  });
});
