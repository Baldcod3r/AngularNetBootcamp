import { Injectable, ɵresetJitOptions } from '@angular/core';
import { ICliente } from './Interfaces/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

//Private list that i can access trough the get method
private _clientes : ICliente[] = [];

get clientes(): ICliente[] {
  return this._clientes;
}
//Get Method to access the list
  agregarCliente(cliente : ICliente){
    this._clientes.push(cliente);
    //Store data in local format using json stringlify to force localstorage to read my object as string
    localStorage.setItem('clientes', JSON.stringify(this._clientes))
  }
  constructor() { 
    this._clientes = JSON.parse(localStorage.getItem('clientes')!) || [];//Use ! if the object doesnt return anything)
  }
}
