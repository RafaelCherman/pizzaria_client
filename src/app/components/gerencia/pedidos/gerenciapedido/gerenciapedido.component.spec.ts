import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GerenciapedidoComponent } from './gerenciapedido.component';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { Observable, of } from 'rxjs';

describe('GerenciapedidoComponent', () => {
  let component: GerenciapedidoComponent;
  let fixture: ComponentFixture<GerenciapedidoComponent>;
  let mockActivatedRoute: any;

  beforeEach(() => {
    //mockActivatedRoute = jasmine.createSpyObj([paramMap: new Observable()], {params: { id: 1 }});
    TestBed.configureTestingModule({
      declarations: [GerenciapedidoComponent],
      imports: [HttpClientTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
      providers:[
        {
          provide: ActivatedRoute, useValue:{
            snapshot: {
              paramMap: { paramMap: {get:(id:string)=>{return '1'}}}
            }
          }
        }
      ]
    });
    fixture = TestBed.createComponent(GerenciapedidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  //TESTE COM ERRO
  //TypeError: this.roteador.snapshot.paramMap.get is not a function
  it('should create', () => {
    expect(component).toBeTruthy();
  }); 
});
