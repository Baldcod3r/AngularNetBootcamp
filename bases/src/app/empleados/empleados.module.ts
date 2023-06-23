import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListadoComponent } from './listado/listado.component';
import { EmpleadoComponent } from './empleado/empleado.component';





@NgModule({
  declarations: [
    EmpleadoComponent,
    ListadoComponent
  ],
  imports: [
    CommonModule,
    
  ],
  exports: [
    EmpleadoComponent,
    ListadoComponent,
  ]
})
export class EmpleadosModule { }
