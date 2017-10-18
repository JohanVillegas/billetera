import { Component, OnInit } from '@angular/core';

import { ArticuloService } from '../shared/articulo.service';
import { Articulo } from '../shared/articulo.model';

@Component({
  selector: 'app-articulos-kpi',
  templateUrl: './articulos-kpi.component.html',
  styleUrls: ['./articulos-kpi.component.css']
})
export class ArticulosKpiComponent implements OnInit {
  articulolista: Articulo[];
  ingreso : number = 0;
  egreso : number = 0;
  restante : number = 0;
  constructor(private articuloService: ArticuloService) { }

  ngOnInit() {
    let x = this.articuloService.getData();
    x.snapshotChanges().subscribe(item => {
      this.ingreso  = 0;
      this.egreso  = 0;
      this.restante  = 0;
      item.forEach(element => {
        var y = element.payload.toJSON();
        if(y["movimiento"]==true)
        this.ingreso = +y["monto"] + this.ingreso;
        else
        this.egreso = +y["monto"] + this.egreso;
      });
      this.restante = this.ingreso - this.egreso;
    });
  }

}
