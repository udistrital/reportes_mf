import { Injectable } from '@angular/core';

import { environment } from '../../../environments/environment';
import { KnowageReportConfig } from './knowage-report-config';

type KnowageAuthCallback = (result: unknown, args: unknown, success: boolean) => void;

interface KnowageEnvironment {
  PROTOCOL: string;
  HOST: string;
  PORT: string;
  CONTEXTPATH: string;
  USER: string;
  PASSWORD: string;
  TIPO_REPORTE?: string;
}

@Injectable({ providedIn: 'root' })
export class KnowageService {
  private sdkLoaded = false;

  async authenticate(scope: unknown, callbackFunction: KnowageAuthCallback): Promise<void> {
    await this.loadSdk();

    const spagoBI = this.getKnowageEnvironment();
    const baseUrl = {
      protocol: spagoBI.PROTOCOL,
      host: spagoBI.HOST,
      port: spagoBI.PORT,
      contextPath: spagoBI.CONTEXTPATH,
      controllerPath: 'servlet/AdapterHTTP',
    };

    const authConf = {
      params: {
        user: spagoBI.USER,
        password: spagoBI.PASSWORD,
      },
      callback: {
        fn: callbackFunction,
        scope,
      },
    };

    this.sbiSdk.services.setBaseUrl(baseUrl);
    this.sbiSdk.api.authenticate(authConf);
  }

  getDocumentHtml(config: KnowageReportConfig): string {
    return this.sbiSdk.api.getDocumentHtml(config);
  }

  getReportLabel(label: string): string {
    const tipoReporte = this.getKnowageEnvironment().TIPO_REPORTE ?? '';
    return `${label}${tipoReporte}`;
  }

  private async loadSdk(): Promise<void> {
    if (this.sbiSdk) {
      this.sdkLoaded = true;
      return;
    }

    const system = (window as unknown as { System?: { import: (module: string) => Promise<unknown> } }).System;

    if (!system?.import) {
      throw new Error('SystemJS no esta disponible para cargar sbisdk desde el root.');
    }

    if (!this.sdkLoaded) {
      await system.import('sbisdk');
      this.sdkLoaded = true;
    }

    if (!this.sbiSdk) {
      throw new Error('No se pudo inicializar Sbi.sdk despues de cargar sbisdk.');
    }
  }

  private get sbiSdk(): any {
    return (window as any).Sbi?.sdk;
  }

  private getKnowageEnvironment(): KnowageEnvironment {
    const spagoBI = (environment as { SPAGOBI?: KnowageEnvironment }).SPAGOBI;

    if (!spagoBI) {
      throw new Error('No existe configuracion SPAGOBI en environment.');
    }

    return spagoBI;
  }
}
