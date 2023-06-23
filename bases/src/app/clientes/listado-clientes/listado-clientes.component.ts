import { Component, Input } from '@angular/core';
import { ICliente } from '../Interfaces/cliente';
import { ClientesService } from '../clientes.service';

@Component({
  selector: 'app-listado-clientes',
  templateUrl: './listado-clientes.component.html',
  styleUrls: ['./listado-clientes.component.css']
})
export class ListadoClientesComponent {

  //@Input()
  //clientes : ICliente[] = []; 

  constructor(private ClientesService : ClientesService) {

  }
  //With this method i fill my list with all the data
  get clientes(): ICliente[] {
    return this.ClientesService.clientes;
  }

}
