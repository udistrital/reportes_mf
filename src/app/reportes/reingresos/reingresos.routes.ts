import { Routes } from '@angular/router';

export const REINGRESOS_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'solicitudes',
    pathMatch: 'full',
  },
  {
    path: 'solicitudes',
    loadComponent: () =>
      import('./reporte-solicitudes/reporte-solicitudes').then(
        (m) => m.ReporteSolicitudes,
      ),
  },
];
