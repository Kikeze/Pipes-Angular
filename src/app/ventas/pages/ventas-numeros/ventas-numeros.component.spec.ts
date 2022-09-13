import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentasNumerosComponent } from './ventas-numeros.component';

describe('VentasNumerosComponent', () => {
  let component: VentasNumerosComponent;
  let fixture: ComponentFixture<VentasNumerosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VentasNumerosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VentasNumerosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
