import { TestBed } from '@angular/core/testing';
import { PizzaService } from './pizza.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {Pizza} from "../models/pizza";

describe('PizzaService', () => {
  let pizzaService: PizzaService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PizzaService]
    });

    pizzaService = TestBed.inject(PizzaService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(pizzaService).toBeTruthy();
  });

  it('should get Pizza by id', () => {
    const mockPizza: Pizza = {
      id: 1,
      tipo: { id: 1, nome: 'Test Pizza Tipo' ,qntSabores: 1, tamanho: 'grande', valor: 10.0 },
      sabor: [{ id: 1, nome: 'Test Sabor 1', valor: 5, ingredientes:'ingradientes'}],
      valorPizza: 15
    };

    pizzaService.findById(1).subscribe((pizza: Pizza) => {
      expect(pizza).toEqual(mockPizza);
    });

    const req = httpTestingController.expectOne(`${pizzaService.API}?id=1`);
    expect(req.request.method).toEqual('GET');
    req.flush(mockPizza);
  });

  it('should get all Pizzas', () => {
    const mockPizzas: Pizza[] = [
      {
        id: 1,
        tipo: { id: 1, nome: 'Test Pizza Tipo' ,qntSabores: 1, tamanho: 'grande', valor: 10.0 },
        sabor: [{id: 1, nome: 'Test Sabor 1', valor: 5, ingredientes:'ingradientes' }],
        valorPizza: 15
      },
      {
        id: 2,
        tipo: { id: 1, nome: 'Test Pizza Tipo' ,qntSabores: 1, tamanho: 'grande', valor: 10.0 },
        sabor: [{ id: 1, nome: 'Test Sabor 1', valor: 5, ingredientes:'ingradientes' }],
        valorPizza: 18
      }
    ];

    pizzaService.listAll().subscribe((pizzas: Pizza[]) => {
      expect(pizzas).toEqual(mockPizzas);
    });

    const req = httpTestingController.expectOne(`${pizzaService.API}/all`);
    expect(req.request.method).toEqual('GET');
    req.flush(mockPizzas);
  });

  it('should calculate Pizza value correctly', () => {
    const mockPizza: Pizza = {
      id: 1,
      tipo: {id: 1, nome: 'Test Pizza Tipo' ,qntSabores: 1, tamanho: 'grande', valor: 10.0 },
      sabor: [{ id: 1, nome: 'Test Sabor 1', valor: 5, ingredientes:'ingradientes', }],
      valorPizza: 0 // The value will be calculated by the service
    };

    const calculatedPizza = pizzaService.calculaValorPizza(mockPizza);

    expect(calculatedPizza).toEqual(15); // 10 (tipo) + 5 (sabor)
  });

});
