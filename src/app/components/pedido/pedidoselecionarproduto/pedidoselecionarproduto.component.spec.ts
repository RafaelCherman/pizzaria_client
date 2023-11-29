// import { ComponentFixture, TestBed } from '@angular/core/testing';
//
// import { PedidoselecionarprodutoComponent } from './pedidoselecionarproduto.component';
// import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
// import { HttpClientTestingModule } from '@angular/common/http/testing';
// import {FormsModule} from "@angular/forms";
// import {By} from "@angular/platform-browser";
//
// describe('PedidoselecionarprodutoComponent', () => {
//   let component: PedidoselecionarprodutoComponent;
//   let fixture: ComponentFixture<PedidoselecionarprodutoComponent>;
//
//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       declarations: [PedidoselecionarprodutoComponent],
//       imports: [HttpClientTestingModule, FormsModule],
//       schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
//     });
//     fixture = TestBed.createComponent(PedidoselecionarprodutoComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });
//
//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
//
//   it('should render a table with product information', () => {
//     // Adapte conforme necessário para a estrutura do seu componente
//     const produtosQnt = [
//       { produto: { id:1,nome: 'Produto1', tipo: 'Tipo1', preco: 10 }, quantidade: 2 },
//       { produto: { id:2, nome: 'Produto2', tipo: 'Tipo2', preco: 15 }, quantidade: 3 },
//     ];
//
//     component.produtosQnt = produtosQnt;
//     fixture.detectChanges();
//
//     const table = fixture.debugElement.query(By.css('.table'));
//     const rows = table.queryAll(By.css('tbody tr'));
//
//     expect(rows.length).toBe(produtosQnt.length);
//
//     produtosQnt.forEach((obj, index) => {
//       const row = rows[index];
//       const cells = row.queryAll(By.css('td'));
//
//       expect(cells[0].nativeElement.textContent).toContain(obj.produto.nome);
//       expect(cells[1].nativeElement.textContent).toContain(obj.produto.tipo);
//       expect(cells[2].nativeElement.textContent).toContain(`R$ ${obj.produto.preco}`);
//       // Adicione mais verificações conforme necessário
//     });
//   });
//
//   it('should trigger methods when buttons are clicked', () => {
//     spyOn(component, 'removerProduto');
//     spyOn(component, 'adicionarProduto');
//     spyOn(component, 'cancelar');
//     spyOn(component, 'adicionar');
//
//     const removeButtons = fixture.debugElement.queryAll(By.css('.addAndRemove'))[0];
//     removeButtons.triggerEventHandler('click', null);
//
//     const addButtons = fixture.debugElement.queryAll(By.css('.addAndRemove'))[1];
//     addButtons.triggerEventHandler('click', null);
//
//     const cancelButton = fixture.debugElement.query(By.css('.btn-danger'));
//     cancelButton.triggerEventHandler('click', null);
//
//     const addButton = fixture.debugElement.query(By.css('.btn-success'));
//     addButton.triggerEventHandler('click', null);
//
//     expect(component.removerProduto).toHaveBeenCalled();
//     expect(component.adicionarProduto).toHaveBeenCalled();
//     expect(component.cancelar).toHaveBeenCalled();
//     expect(component.adicionar).toHaveBeenCalled();
//   });
// });
