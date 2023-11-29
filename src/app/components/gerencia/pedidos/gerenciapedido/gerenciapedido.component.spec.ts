// import { ComponentFixture, TestBed } from '@angular/core/testing';
//
// import { GerenciapedidoComponent } from './gerenciapedido.component';
// import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
// import { HttpClientTestingModule } from '@angular/common/http/testing';
// import {ActivatedRoute, ActivatedRouteSnapshot, convertToParamMap} from '@angular/router';
//
// describe('GerenciapedidoComponent', () => {
//   let component: GerenciapedidoComponent;
//   let fixture: ComponentFixture<GerenciapedidoComponent>;
//   let mockActivatedRoute: ActivatedRoute;
//
//   beforeEach(async () => {
//     mockActivatedRoute = {
//       snapshot: {
//         paramMap: {
//           get: (key: string) => '1' // Substitua pelo valor desejado
//         } as any
//       } as ActivatedRouteSnapshot
//     }as any ;
//
//
//     await TestBed.configureTestingModule({
//       declarations: [GerenciapedidoComponent],
//       imports: [HttpClientTestingModule],
//       providers: [
//         { provide: ActivatedRoute, useValue: mockActivatedRoute }
//       ]
//     })
//       .compileComponents();
//   });
//
//   beforeEach(() => {
//     fixture = TestBed.createComponent(GerenciapedidoComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });
//
//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
//
//   it('should set id from ActivatedRoute', () => {
//     expect(component.id).toEqual('1');
//   });
//
//   it('should call findById if id is not null', () => {
//     spyOn(component, 'findById');
//     component.ngOnInit();
//     expect(component.findById).toHaveBeenCalled();
//   });
// });
//
//
