import { Component } from '@angular/core';

import { KnowageReport } from '../../../shared/knowage/knowage-report/knowage-report';

@Component({
  selector: 'app-reporte-aspirantes',
  imports: [KnowageReport],
  templateUrl: './reporte-aspirantes.html',
  styleUrl: './reporte-aspirantes.scss',
})
export class ReporteAspirantes {
  readonly reportLabel = 'RteAspirantesProd';
}
