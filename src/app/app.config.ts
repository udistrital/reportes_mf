import { APP_BASE_HREF } from '@angular/common';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideSingleSpa } from 'single-spa-angular';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideSingleSpa(),
    provideRouter(routes),
    provideHttpClient(withFetch()),
    { provide: APP_BASE_HREF, useValue: '/reportes/' },
  ]
};
