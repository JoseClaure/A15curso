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

  //tipado flexible
  nombre:String = "A15";
  nombre2 = "Angular 15";

}