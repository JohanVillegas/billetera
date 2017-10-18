import { Component, OnInit } from '@angular/core';

import { ArticuloService } from '../shared/articulo.service';
import { Articulo } from '../shared/articulo.model';

@Component({
  selector: 'app-articulo-lista',
  templateUrl: './articulo-lista.component.html',
  styleUrls: ['./articulo-lista.component.css']
})
export class ArticuloListaComponent implements OnInit {
  articulolista: Articulo[];
  constructor(private articuloService: ArticuloService) { }

  ngOnInit() {

    var x = this.articuloService.getData();

    x.snapshotChanges().subscribe(item => {
      this.articulolista = [];
      item.forEach(element => {
        var y = element.payload.toJSON();
        y["$key"] = element.key;
        this.articulolista.push(y as Articulo);
      });
    });
  }

  onItemClick(art : Articulo){
    this.articuloService.selectedArticulo = Object.assign({},art);
    this.getStyle(art);
  }

  getStyle(art : Articulo) {
    if (art.$key === this.articuloService.selectedArticulo.$key) {
        return "bisque";
    } else {
        return "";
    }
}
}
