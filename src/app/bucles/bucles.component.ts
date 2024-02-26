import { Component } from '@angular/core';
import { Persona } from '../persona';

@Component({
  selector: 'app-bucles',
  templateUrl: './bucles.component.html',
  styleUrls: ['./bucles.component.css']
})
export class BuclesComponent {

  personas:Persona[] = [
    {nombre: 'Juan', edad: 33},
    {nombre: 'Pedro', edad: 26}
  ];
}
