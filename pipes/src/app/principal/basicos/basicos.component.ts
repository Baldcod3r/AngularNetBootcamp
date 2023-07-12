import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent {
nombre : string = "agustin";
apellido : string = "Barrale";
nombreCompleto : string = this.nombre+ " "+ this.apellido;

fecha: Date = new Date();


}
