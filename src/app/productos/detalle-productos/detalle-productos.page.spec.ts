import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetalleProductosPage } from './detalle-productos.page';

describe('DetalleProductosPage', () => {
  let component: DetalleProductosPage;
  let fixture: ComponentFixture<DetalleProductosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DetalleProductosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
