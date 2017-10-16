import { Component, OnInit } from '@angular/core';
import {  NgForm } from "@angular/forms";

import { ArticuloService } from "../shared/articulo.service";

@Component({
  selector: 'app-articulo',
  templateUrl: './articulo.component.html',
  styleUrls: ['./articulo.component.css']
})
export class ArticuloComponent implements OnInit {

  constructor(private articuloService : ArticuloService) { }

  ngOnInit() {
    this.resetForm();
  }

  onSubmit(form : NgForm) {
    if(form.value.$key == null)
     this.articuloService.insertArticulo(form.value);
    else
     this.articuloService.updateArticulo(form.value)
    this.resetForm(form);
  }

  resetForm(form? : NgForm){
    if (form != null)
      form.reset();
    this.articuloService.selectedArticulo = {
      $key : null,
      nombre : '',
      monto : 0,
      categoria : '',
      fecha : '',
    }
  }

  onDelete(form : NgForm){
    if(confirm('Eliminar ?')==true)
      {
        this.articuloService.deleteArticulo(form.value.$key);
        this.resetForm(form);
      }
  }
}
