import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  public productos = [
    {
      id: "1",
      titulo: "cazuela",
      url: "https://img-global.cpcdn.com/recipes/fadaee2fd7c899a6/400x400cq70/photo.jpg",
      comentarios: [ "Que ricoo", "Taba rico"]
    },
    {
      id: "2",
      titulo: "Pollo",
      url: "https://jumbo.vtexassets.com/arquivos/ids/410593/Pollo-asado-kg.jpg?v=637469376078770000",
      comentarios: [ "taba malo", "Taba rico"]
    },
    {
      id: "3",
      titulo: "Carne Mechada",
      url: "https://cocinalocal.cl/wp-content/uploads/2021/08/carne-mechada.jpg",
      comentarios: [ "Esta super", "Estaba rico"]
    }
  ]

  constructor() { }

  //Listar
  getProductos(){
    return [...this.productos]
  }

  //Agregar
  addProductos(titulo: string, url: string, comentarios: string[]){
    this.productos.push(
      {
        id: this.productos.length + 1 + '',
        titulo: titulo,
        url: url,
        comentarios: comentarios
    }
    )
  }

  //Eliminar
  deleteProductos(productoID: string){

    this.productos = this.productos.filter( p => {
      return p.id !== productoID
    })
  }

  //Buscar por ID
  getProductosByID(productoID: string) {
    const productoEncontrado = this.productos.find(p => p.id === productoID);
  
    if (productoEncontrado) {
      return { ...productoEncontrado };
    }
  
    return null; // o un valor por defecto si es necesario
  }
  

}
