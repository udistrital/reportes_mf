import { Component } from '@angular/core';

import { KnowageReport } from '../../../shared/knowage/knowage-report/knowage-report';

@Component({
  selector: 'app-reporte-admitidos',
  imports: [KnowageReport],
  templateUrl: './reporte-admitidos.html',
  styleUrl: './reporte-admitidos.scss',
})
export class ReporteAdmitidos {
  readonly reportLabel = 'RteAdmitidosProd';
}
