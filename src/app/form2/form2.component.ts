import { Component } from '@angular/core';

@Component({
  selector: 'app-form2',
  templateUrl: './form2.component.html',
  styleUrls: ['./form2.component.css']
})
export class Form2Component {
  //formulario basado en plantillas

  persona = {
    nombre: '',
    edad: ''
  }
  procesar() {
    console.log(this.persona);
  }
}