import { Routes } from '@angular/router';

import { authGuard } from '../../_guards/auth.guard';

export const REINGRESOS_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'solicitudes',
    pathMatch: 'full',
  },
  {
    path: 'solicitudes',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./reporte-solicitudes/reporte-solicitudes').then(
        (m) => m.ReporteSolicitudes,
      ),
  },
];
