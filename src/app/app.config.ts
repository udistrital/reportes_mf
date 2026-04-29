import { APP_BASE_HREF } from '@angular/common';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideTranslateService } from '@ngx-translate/core';
import { provideTranslateHttpLoader } from '@ngx-translate/http-loader';
import { provideSingleSpa } from 'single-spa-angular';

import { routes } from './app.routes';
import { environment } from '../environments/environment';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideSingleSpa(),
    provideRouter(routes),
    provideHttpClient(withFetch()),
    provideTranslateService({
      lang: 'es',
      fallbackLang: 'es',
    }),
    provideTranslateHttpLoader({
      prefix: `${environment.apiUrl}assets/i18n/`,
      suffix: '.json',
    }),
    { provide: APP_BASE_HREF, useValue: '/reportes/' },
  ]
};
