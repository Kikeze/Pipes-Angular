import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentasBasicosComponent } from './ventas-basicos.component';

describe('VentasBasicosComponent', () => {
  let component: VentasBasicosComponent;
  let fixture: ComponentFixture<VentasBasicosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VentasBasicosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VentasBasicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
