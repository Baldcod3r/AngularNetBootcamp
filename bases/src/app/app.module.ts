import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AcumuladorComponent } from './acumulador/acumulador.component';
import { EmpleadosModule } from './empleados/empleados.module';
import { ClientesModule } from './clientes/clientes.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    AppComponent,
    AcumuladorComponent,
    
  ],
  //Aca importo todos los modulos que vaya creando
  imports: [
    BrowserModule,
    EmpleadosModule,
    ClientesModule,
    BrowserAnimationsModule,
    
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
//EN IMPORTS VAN MODULOS CREADOS O DE LIBRERIAS DE ANGULAR
//Lazy Loading solo se cargan los modulos que se esten utilizando para aumentar rendimiento 
//Interpolacion es la forma de comunicar el ts con el html
//Si creo componente le tengo que asignar el directorio 
//El modulo automaticamente crea el directorio
//