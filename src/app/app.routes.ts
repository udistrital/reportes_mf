import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'inscripciones/inscritos',
    pathMatch: 'full',
  },
  {
    path: 'inscripciones',
    loadChildren: () =>
      import('./reportes/inscripciones/inscripciones.routes').then(
        (m) => m.INSCRIPCIONES_ROUTES,
      ),
  },
  {
    path: 'reingresos',
    loadChildren: () =>
      import('./reportes/reingresos/reingresos.routes').then(
        (m) => m.REINGRESOS_ROUTES,
      ),
  },
];
