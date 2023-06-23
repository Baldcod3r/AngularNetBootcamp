import { Component } from '@angular/core';
import { IEmpleado } from '../interfaces/empleado';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent {

  tituloAntiguo : string = 'Empleados Antiguos';
  tituloNuevo : string = 'Empleados Nuevos';


  empleadosAntiguos : IEmpleado[] = [{
    nombre: 'carlos',
    apellido: 'piedra',
    direccion: '8225 Los Angeles',
    sueldo : 5000
  },
  {
    nombre: 'agustin',
    apellido: 'barrale',
    direccion: 'vieytes 2565',
    sueldo: 3000
  },
  {
    nombre: 'jonathan',
    apellido: 'zamorano',
    direccion: 'huerta grande 3518',
    sueldo: 10000
  }
]

empleadosNuevos : IEmpleado[] = [
  {
    nombre: 'oscar',
    apellido: 'piedra',
    direccion: '8225 Los Angeles',
    sueldo : 5000
  },
  {
    nombre: 'david',
    apellido: 'paez',
    direccion: '2341 General Paz',
    sueldo : 10000
  }
]
}
