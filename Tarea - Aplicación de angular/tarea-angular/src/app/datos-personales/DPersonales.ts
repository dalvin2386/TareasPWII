import { Component, input } from '@angular/core';
import { IDPersonales } from './IDPersonales';

@Component({
  selector: 'app-dpersonales',
  imports: [],
  templateUrl: './DPersonales.html',
  styleUrl: './DPersonales.css',
})
export class DPersonales {
  datosPersonales = input<IDPersonales>({
    id: 0,
    nombre: 'No definido',
    apellido: 'No definido',
    edad: 0,
  });
}
