import { Component } from '@angular/core';

@Component({
  selector: 'app-botones',
  templateUrl: './botones.component.html',
  styleUrls: ['./botones.component.css']
})
export class BotonesComponent {

  constructor() {}

  ngOnInit():void {}

  text_color:string = "";

  button_disabled:boolean = false;

  src:string = "https://images.pexels.com/photos/3747519/pexels-photo-3747519.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";


}