import { Component, OnInit } from '@angular/core';
import {ProductosService} from '../productos.service' //Importamos las funciones de "producto.service.ts"
import {ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-detalle-productos',
  templateUrl: './detalle-productos.page.html',
  styleUrls: ['./detalle-productos.page.scss'],
})
export class DetalleProductosPage implements OnInit {

  public datos: { id: string; titulo: string; url: string; comentarios: string[]; } | null = null;

  constructor(private servicio: ProductosService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(p => {
      const productoID = p.get('productoID');
      if (productoID !== null) {
        this.datos = this.servicio.getProductosByID(productoID);
        console.log(this.datos);
      }
    });
    }
}