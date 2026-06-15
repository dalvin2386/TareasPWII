import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DPersonales } from './datos-personales/DPersonales';

import { Direccion } from './direccion/Direccion';
import { Pais } from './pais/Pais';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DPersonales, Direccion, Pais],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  persona = [
    {
      id: 1,
      nombre: 'Juan',
      apellido: 'Pérez',
      edad: 25,
    },
    {
      id: 2,
      nombre: 'María',
      apellido: 'Gómez',
      edad: 30,
    },
    {
      id: 3,
      nombre: 'Carlos',
      apellido: 'López',
      edad: 28,
    },
  ];

  direccion = [
    {
      ciudad: 'Tegucigalpa',
      municipio: 'Distrito Central',
      residencia: 'Colonia Palmira',
    },
    {
      ciudad: 'Ciudad de Mexico',
      municipio: 'Cuauhtémoc',
      residencia: 'Colonia Satélite',
    },
    {
      ciudad: 'Managua',
      municipio: 'Managua',
      residencia: 'Residencial Villa Real',
    },
  ];

  pais = [
    {
      pais: 'Honduras',
      departamento: 'Francisco Morazán',
      region: 'Centro',
      municipio: 'Distrito Central',
    },

    {
      pais: 'Mexico',
      departamento: 'Mexico',
      region: 'Centro',
      municipio: 'Cuauhtémoc',
    },

    {
      pais: 'Nicaragua',
      departamento: 'Managua',
      region: 'Centro',
      municipio: 'Managua',
    },
  ];
}
