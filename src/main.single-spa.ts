import { bootstrapApplication, platformBrowser } from '@angular/platform-browser';
import { NavigationStart, Router } from '@angular/router';
import { provideSingleSpaPlatform, singleSpaAngular } from 'single-spa-angular';

import { appConfig } from './app/app.config';
import { App } from './app/app';

const lifecycles = singleSpaAngular({
  bootstrapFunction: () => {
    const platformRef = platformBrowser(provideSingleSpaPlatform());
    return bootstrapApplication(App, appConfig, { platformRef });
  },
  template: '<reportes-mf/>',
  Router,
  NavigationStart,
  NgZone: 'noop',
});

export const bootstrap = lifecycles.bootstrap;
export const mount = lifecycles.mount;
export const unmount = lifecycles.unmount;
