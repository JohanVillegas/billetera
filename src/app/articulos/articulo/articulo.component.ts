import { Component, OnInit } from '@angular/core';
import {  NgForm } from '@angular/forms';

import { ArticuloService } from '../shared/articulo.service';

@Component({
  selector: 'app-articulo',
  templateUrl: './articulo.component.html',
  styleUrls: ['./articulo.component.css'],
})
export class ArticuloComponent implements OnInit {

  constructor(public articuloService : ArticuloService) { }

  ngOnInit() {
    this.resetForm();
  }

  onSubmit(form : NgForm) {
    if(form.value.movimiento == null)
    form.value.movimiento = false;

    if(form.value.$key == null)
     this.articuloService.insertArticulo(form.value);
    else
     this.articuloService.updateArticulo(form.value)
    this.resetForm();
  }

  resetForm(form? : NgForm){
    if (form != null) {
      form.reset();
    }
    this.articuloService.selectedArticulo = {
      $key : null,
      nombre : '',
      monto : 0,
      movimiento : false,
      categoria : '',
      fecha : this.getDate(),
    }
    
  }

  onDelete(form : NgForm){
    if(confirm('Eliminar ?')==true)
      {
        this.articuloService.deleteArticulo(form.value.$key);
        this.resetForm(form);
      }
  }

  getDate(){
   let myDate = new Date();   ///'2017-10-15';
   return myDate.getFullYear() + "-" + (myDate.getMonth() + 1) + "-" + myDate.getDate();
  }
}
