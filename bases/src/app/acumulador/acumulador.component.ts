import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acumulador',
  templateUrl: './acumulador.component.html',
  styleUrls: ['./acumulador.component.css']
})
export class AcumuladorComponent implements OnInit {
  /**
   *
   */
  constructor() {}
    ngOnInit():void {

    }
    
  title : string = 'Angular Bases';

  numero: number = 2; 
  
  Duplicar() {
    this.numero = this.numero * 2;
  } 
  Triplicar() {
    this.numero = this.numero * 3;
  }
  Reiniciar() {
    this.numero = 2;
    
  }
}
