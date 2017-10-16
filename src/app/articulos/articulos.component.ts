import { Component, OnInit } from '@angular/core';

import { ArticuloService } from "./shared/articulo.service";

@Component({
  selector: 'app-articulos',
  templateUrl: './articulos.component.html',
  styleUrls: ['./articulos.component.css'],
  providers:[ArticuloService]
})
export class ArticulosComponent implements OnInit {

  constructor(private articuloService : ArticuloService) { }

  ngOnInit() {
  }

}
