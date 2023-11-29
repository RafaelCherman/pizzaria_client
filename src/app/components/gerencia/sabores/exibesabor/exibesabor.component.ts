import { Component, Input, inject } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { of } from 'rxjs';
import { Sabor } from 'src/app/models/sabor';
import { SaborService } from 'src/app/services/sabor.service';

@Component({
  selector: 'app-exibesabor',
  templateUrl: './exibesabor.component.html',
  styleUrls: ['./exibesabor.component.scss']
})
export class ExibesaborComponent {

  @Input() sabores: Sabor[]=[];
  @Input() gerencia: boolean = true;


  lista: Sabor[] = [];
  objeto: Sabor = new Sabor();
  modalService = inject(NgbModal);
  opcaoBotao: string = "Cadastrar";
  router = inject(Router);
  service = inject(SaborService);


/*
  constructor(){
  }

  gerenciar(id: number)
  {
    this.router.navigate(['sabores/editar/'+ id]);
  }*/


  constructor() {
    this.listar();
  }

  listar() {
    this.service.listAtivo().subscribe({
      next: lista => {
        
        this.lista = lista;
      },
      error: erro => {
        this.lista = [];
        console.error(erro);
      }
    });

  }

  editar(content: any, objeto: Sabor) {
    this.objeto = Object.assign({}, objeto);
    this.opcaoBotao = "Editar";
    this.modalService.open(content, {size: 'xl'})
  }

  excluir(content: any, objeto: Sabor) {
    this.opcaoBotao= "Excluir";
    this.objeto = Object.assign({}, objeto);
    this.modalService.open(content,{size: 'xl'});
  }


  cadastrar(content: any) {
    this.opcaoBotao = "Cadastrar";
    this.objeto = new Sabor();
    this.modalService.open(content, {size: 'xl'})
  }


}


describe('ExibesaborComponent', () => {
  let component: ExibesaborComponent;
  let fixture: ComponentFixture<ExibesaborComponent>;
  let saborServiceMock: jasmine.SpyObj<SaborService>;
  let modalServiceMock: jasmine.SpyObj<NgbModal>;

  beforeEach(() => {
    saborServiceMock = jasmine.createSpyObj('SaborService', ['listAtivo']);
    modalServiceMock = jasmine.createSpyObj('NgbModal', ['open']);

    TestBed.configureTestingModule({
      declarations: [ExibesaborComponent],
      providers: [
        { provide: SaborService, useValue: saborServiceMock },
        { provide: NgbModal, useValue: modalServiceMock },
      ],
    });

    fixture = TestBed.createComponent(ExibesaborComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should list flavors correctly', () => {
    const mockLista = [{ id: 1, nome: 'Sabor 1', ingredientes: 'Ingrediente 1', valor: 10.99 }];
    saborServiceMock.listAtivo.and.returnValue(of(mockLista));

    component.listar();

    expect(component.lista).toEqual(mockLista);
  });

  it('should configure for editing', () => {
    const mockObjeto = { id: 1, nome: 'Sabor 1', ingredientes: 'Ingrediente 1', valor: 10.99 };

    component.editar(null, mockObjeto);

    expect(component.opcaoBotao).toEqual('Editar');
    expect(component.objeto).toEqual(mockObjeto);
    expect(modalServiceMock.open).toHaveBeenCalled();
  });

  it('should configure for deletion', () => {
    const mockObjeto = { id: 1, nome: 'Sabor 1', ingredientes: 'Ingrediente 1', valor: 10.99 };

    component.excluir(null, mockObjeto);

    expect(component.opcaoBotao).toEqual('Excluir');
    expect(component.objeto).toEqual(mockObjeto);
    expect(modalServiceMock.open).toHaveBeenCalled();
  });
});