import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentasNoComunesComponent } from './ventas-no-comunes.component';

describe('VentasNoComunesComponent', () => {
  let component: VentasNoComunesComponent;
  let fixture: ComponentFixture<VentasNoComunesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VentasNoComunesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VentasNoComunesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
