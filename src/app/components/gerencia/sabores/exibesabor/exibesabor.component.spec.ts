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


});

