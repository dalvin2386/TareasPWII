import { Component, input } from '@angular/core';
import { IDireccion } from './IDireccion';

@Component({
  selector: 'app-direccion',
  imports: [],
  templateUrl: './Direccion.html',
  styleUrl: './Direccion.css',
})
export class Direccion {
  direccion = input<IDireccion>({
    ciudad: 'No definido',
    municipio: 'No definido',
    residencia: 'No definido',
  });
}
