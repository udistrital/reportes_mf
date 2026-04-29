import { Routes } from '@angular/router';

import { authGuard } from '../../_guards/auth.guard';

export const INSCRIPCIONES_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'inscritos',
    pathMatch: 'full',
  },
  {
    path: 'inscritos',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./reporte-inscritos/reporte-inscritos').then(
        (m) => m.ReporteInscritos,
      ),
  },
  {
    path: 'aspirantes',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./reporte-aspirantes/reporte-aspirantes').then(
        (m) => m.ReporteAspirantes,
      ),
  },
  {
    path: 'admitidos',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./reporte-admitidos/reporte-admitidos').then(
        (m) => m.ReporteAdmitidos,
      ),
  },
];
