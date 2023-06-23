import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ICliente } from '../Interfaces/cliente';
import { ClientesService } from '../clientes.service';


@Component({
  selector: 'app-agregar-cliente',
  templateUrl: './agregar-cliente.component.html',
  styleUrls: ['./agregar-cliente.component.css']
})
export class AgregarClienteComponent {

  nuevo : ICliente = {
    nombre: '',
    credito: 0
  }

  
  // @Output()
  // onNuevoCliente : EventEmitter<ICliente> = new EventEmitter();

  constructor(private ClientesService:ClientesService) {}
  agregar() {
    //Validacion
    if (this.nuevo.nombre.trim().length === 0) {
      return;
    }
    //Hago un return para que no continue
    if(this.nuevo.credito === null){
      return;
    }

    //Interacts with the service directly to add a new client
    this.ClientesService.agregarCliente(this.nuevo);

    //this.onNuevoCliente.emit(this.nuevo)

    this.nuevo = {
      nombre: '',
      credito: 0
    }
  
  }
}
