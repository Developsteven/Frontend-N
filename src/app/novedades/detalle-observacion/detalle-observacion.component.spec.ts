import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleObservacionComponent } from './detalle-observacion.component';

describe('DetalleObservacionComponent', () => {
  let component: DetalleObservacionComponent;
  let fixture: ComponentFixture<DetalleObservacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleObservacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleObservacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
