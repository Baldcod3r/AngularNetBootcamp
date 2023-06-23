import { Component } from '@angular/core';
import { ICliente } from '../Interfaces/cliente';
import cli from '@angular/cli';
import { ClientesService } from '../clientes.service';

@Component({
  selector: 'app-pagina-inicio',
  templateUrl: './pagina-inicio.component.html',
  styleUrls: ['./pagina-inicio.component.css']
})
export class PaginaInicioComponent {



  //Service Injecting
  constructor ( private ClientesService: ClientesService) {}
  

}
