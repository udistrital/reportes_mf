import { Component } from '@angular/core';

import { KnowageReport } from '../../../shared/knowage/knowage-report/knowage-report';

@Component({
  selector: 'app-reporte-inscritos',
  imports: [KnowageReport],
  templateUrl: './reporte-inscritos.html',
  styleUrl: './reporte-inscritos.scss',
})
export class ReporteInscritos {
  readonly reportLabel = 'RteInscritosProd';
}
