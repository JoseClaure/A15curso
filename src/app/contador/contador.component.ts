import { Component } from '@angular/core';
import { Persona } from '../persona';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent {

  constructor(){}

  ngOnInit():void {}

  /*
  tipado flexible
  */
  nombre:string = "REGPRO prueba";
  nombre2 = "REGPROAngular 15";

  usuario:Persona = {
    nombre : "40758607",
    edad: 123456789
  };

  numero:number = 1;

  decrement() {
    this.numero--;
  }

  increment() {
    this.numero++;
  }
}