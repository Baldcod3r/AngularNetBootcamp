import { Component } from '@angular/core';
import { AnimappService } from '../animapp.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent {

  constructor (private AnimappService:AnimappService) {}

buscar : string = '';

busqueda () {
  this.AnimappService.buscarGifs(this.buscar);
  this.buscar = '';
}
}
