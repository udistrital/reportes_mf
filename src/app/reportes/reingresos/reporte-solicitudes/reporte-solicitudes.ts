import { Component } from '@angular/core';

import { KnowageReport } from '../../../shared/knowage/knowage-report/knowage-report';

@Component({
  selector: 'app-reporte-solicitudes',
  imports: [KnowageReport],
  templateUrl: './reporte-solicitudes.html',
  styleUrl: './reporte-solicitudes.scss',
})
export class ReporteSolicitudes {
  readonly reportLabel = 'RteReingresosProd';
}
