import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientecriarComponent } from './clientecriar.component';

describe('ClientecriarComponent', () => {
  let component: ClientecriarComponent;
  let fixture: ComponentFixture<ClientecriarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClientecriarComponent]
    });
    fixture = TestBed.createComponent(ClientecriarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
