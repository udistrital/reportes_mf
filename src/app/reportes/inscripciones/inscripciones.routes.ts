import { Routes } from '@angular/router';

export const INSCRIPCIONES_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'inscritos',
    pathMatch: 'full',
  },
  {
    path: 'inscritos',
    loadComponent: () =>
      import('./reporte-inscritos/reporte-inscritos').then(
        (m) => m.ReporteInscritos,
      ),
  },
  {
    path: 'aspirantes',
    loadComponent: () =>
      import('./reporte-aspirantes/reporte-aspirantes').then(
        (m) => m.ReporteAspirantes,
      ),
  },
  {
    path: 'admitidos',
    loadComponent: () =>
      import('./reporte-admitidos/reporte-admitidos').then(
        (m) => m.ReporteAdmitidos,
      ),
  },
];
