import { Component, Input } from '@angular/core';
import { IEmpleado } from '../interfaces/empleado';


@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./../../app.component.css']
})
export class ListadoComponent {

  etiquetaBorrado: string = '';

  @Input()
 empleados : IEmpleado [] = [];
 @Input()
 titulo : string = '';
borrar(){

 

const empBorrado = this.empleados.shift();

if(empBorrado !== undefined) {
  this.etiquetaBorrado = empBorrado?.nombre+ ' ' + empBorrado?.apellido;
}
else {
  this.etiquetaBorrado='';
}



} 


}
