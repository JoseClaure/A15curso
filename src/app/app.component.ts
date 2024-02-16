import { Component } from '@angular/core';

@Component({
  selector: 'app-root', //se llama al componente
  templateUrl: './app.component.html', //se asigna la dirección del HTML
  /* template: '<h1>Curso Angular</h1>', //es posible usar HTML directamente */ 
  styleUrls: ['./app.component.css'] //se importan los estilos

})
export class AppComponent {
  title = 'curso_angular';
}
