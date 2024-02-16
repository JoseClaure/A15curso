import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent {

  constructor(){

  }

  ngOnInit():void {

  }

  /*
  tipado flexible
  */
  nombre:string = "REGPRO";
  nombre2 = "REGPROAngular 15";

  usuario = {
    codoid : "40758607",
    password: "123456789"
  };

}