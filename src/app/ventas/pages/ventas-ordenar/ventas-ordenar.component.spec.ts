import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentasOrdenarComponent } from './ventas-ordenar.component';

describe('VentasOrdenarComponent', () => {
  let component: VentasOrdenarComponent;
  let fixture: ComponentFixture<VentasOrdenarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VentasOrdenarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VentasOrdenarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
