import { Component, input } from '@angular/core';
import { IPais } from './IPais';

@Component({
  selector: 'app-pais',
  imports: [],
  templateUrl: './Pais.html',
  styleUrl: './Pais.css',
})
export class Pais {
  pais = input<IPais>({
    pais: 'No definido',
    departamento: 'No definido',
    region: 'No definido',
    municipio: 'No definido',
  });
}
