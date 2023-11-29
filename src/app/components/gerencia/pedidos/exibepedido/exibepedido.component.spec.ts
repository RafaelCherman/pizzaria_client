// import { ComponentFixture, TestBed } from '@angular/core/testing';
//
// import { ExibepedidoComponent } from './exibepedido.component';
// import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
// import { HttpClientTestingModule } from '@angular/common/http/testing';
//
// describe('ExibepedidoComponent', () => {
//   let component: ExibepedidoComponent;
//   let fixture: ComponentFixture<ExibepedidoComponent>;
//
//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       declarations: [ExibepedidoComponent],
//       imports: [HttpClientTestingModule],
//       schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
//     });
//     fixture = TestBed.createComponent(ExibepedidoComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });
//
//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
//
//   it('should render table with correct columns and data', () => {
//     const compiled = fixture.nativeElement;
//
//     const tableElement = compiled.querySelector('table.table.table-hover');
//     expect(tableElement).toBeTruthy();
//
//     const columnHeaders = tableElement.querySelectorAll('thead tr th');
//     expect(columnHeaders.length).toBe(7);
//     expect(columnHeaders[0].textContent).toContain('Pedido Nº');
//     expect(columnHeaders[1].textContent).toContain('Cliente');
//     expect(columnHeaders[2].textContent).toContain('Endereço');
//     expect(columnHeaders[3].textContent).toContain('Data do Pedido');
//     expect(columnHeaders[4].textContent).toContain('Status');
//     expect(columnHeaders[5].textContent).toContain('Valor Total');
//     expect(columnHeaders[6].textContent).toContain('Opções');
//     fixture.detectChanges();
//     const tableRows = tableElement.querySelectorAll('tbody tr');
//     expect(tableRows.length).toBe(component.pedidos.length);
//   });
//
//   it('should call gerenciar method when button is clicked', () => {
//     spyOn(component, 'gerenciar');
//     fixture.detectChanges();
//     const button = fixture.nativeElement.querySelector('input.btn.btn-warning');
//     button.click();
//     expect(component.gerenciar).toHaveBeenCalledWith(1);
//   });
//
//
// });
