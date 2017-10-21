import { Injectable } from '@angular/core';
import { AngularFireDatabase,AngularFireList } from 'angularfire2/database';

import { Articulo } from './articulo.model';
import { map } from 'rxjs/operator/map';

@Injectable()
export class ArticuloService {
  articuloLista : AngularFireList<any>;
  selectedArticulo : Articulo = new Articulo(); 
  constructor(private firebase : AngularFireDatabase) { }

  getData(){
    this.articuloLista = this.firebase.list('articulos', ref => ref.orderByKey());
        return this.articuloLista;
  }

  insertArticulo(articulo: Articulo){
    this.articuloLista.push({
      nombre    : articulo.nombre,
      monto     : articulo.monto,
      movimiento : articulo.movimiento,
      categoria : articulo.categoria,
      fecha     : articulo.fecha
    });
  }

  updateArticulo(articulo: Articulo){
     this.articuloLista.update(articulo.$key,{
      nombre : articulo.nombre,
      monto : articulo.monto,
      movimiento : articulo.movimiento,
      categoria : articulo.categoria,
      fecha : articulo.fecha
     })
  }

  deleteArticulo(key: string){
    this.articuloLista.remove(key);
  }
}
