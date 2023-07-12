import { Component } from '@angular/core';

@Component({
  selector: 'app-otros',
  templateUrl: './otros.component.html',
  styleUrls: ['./otros.component.css']
})
export class OtrosComponent {
  
  nombre : string = "Carlos";
  genero: string = "masculino";

  usuarios : string[] = [];

  usuariosMapa = {
    '=0' : 'No hay Usuarios en linea',
    '=1' : 'Tenemos 1 Usuario en linea',
    '=2' : 'Tenemos 2 Usuarios en linea',
    'other' : 'Tenemos # Usuarios en linea'
  }

  bienvenidoMapa = {
    'masculino' : 'Bienvenido',
    'femenino' : 'Bienvenida'
  }

}
