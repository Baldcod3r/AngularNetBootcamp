import { Component } from '@angular/core';
import { AnimappService } from '../animapp.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css']
})
export class ResultadosComponent {
  constructor (private AnimappService:AnimappService) {}


  get resultados() {
  return this.AnimappService.resultados;
}

}
