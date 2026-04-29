import { CommonModule } from '@angular/common';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

import { KnowageReportConfig } from '../knowage-report-config';
import { KnowageService } from '../knowage.service';

@Component({
  selector: 'app-knowage-report',
  imports: [CommonModule, TranslateModule],
  templateUrl: './knowage-report.html',
  styleUrl: './knowage-report.scss',
})
export class KnowageReport implements OnInit {
  @Input({ required: true }) reportLabel = '';
  @Input() reportTitleKey = '';
  @Input() executionRole = '/spagobi/user';
  @Input() displayToolbar = true;
  @Input() displaySliders = true;
  @Input() parameters?: Record<string, string | number | boolean>;

  @ViewChild('reportContainer', { static: true }) reportContainer!: ElementRef<HTMLDivElement>;

  statusMessageKey = 'reportes.estado.cargando';
  errorMessageKey = '';
  private retry = true;

  constructor(private readonly knowageService: KnowageService) {}

  ngOnInit(): void {
    if (!this.reportLabel) {
      this.showError('reportes.estado.labelNoConfigurado');
      return;
    }

    void this.loadReport();
  }

  private async loadReport(): Promise<void> {
    try {
      await this.knowageService.authenticate(this, this.handleAuthentication);
    } catch (error) {
      console.error('No se pudo cargar el reporte Knowage:', error);
      this.showError('reportes.estado.errorCargando');
    }
  }

  private readonly handleAuthentication = (_result: unknown, _args: unknown, success: boolean): void => {
    this.statusMessageKey = '';

    if (success) {
      this.errorMessageKey = '';
      this.renderReport();
      return;
    }

    if (this.retry) {
      this.retry = false;
      this.statusMessageKey = 'reportes.estado.reintentando';
      void this.loadReport();
      return;
    }

    this.showError('reportes.estado.errorObteniendo');
  };

  private renderReport(): void {
    try {
      const reportConfig: KnowageReportConfig = {
        documentLabel: this.knowageService.getReportLabel(this.reportLabel),
        executionRole: this.executionRole,
        displayToolbar: this.displayToolbar,
        displaySliders: this.displaySliders,
        parameters: this.parameters,
        iframe: {
          style: 'border: solid rgb(0,0,0,0.2) 1px;',
          height: '680px',
          width: '100%',
        },
      };

      this.reportContainer.nativeElement.innerHTML = this.knowageService.getDocumentHtml(reportConfig);
    } catch (error) {
      console.error('Error generando HTML del reporte Knowage:', error);
      this.showError('reportes.estado.errorGenerando');
    }
  }

  private showError(messageKey: string): void {
    this.statusMessageKey = '';
    this.errorMessageKey = messageKey;
  }
}
