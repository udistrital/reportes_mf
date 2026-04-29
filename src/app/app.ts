import { ApplicationRef, Component, OnDestroy, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'reportes-mf',
  imports: [RouterOutlet],
  templateUrl: './app.html',
})
export class App implements OnInit, OnDestroy {
  protected readonly title = signal('reportes-mf');

  private readonly handleLanguageChange = (event: Event): void => {
    const lang = (event as CustomEvent<{ answer?: string }>).detail?.answer;
    this.useLanguage(lang);
  };

  constructor(
    private readonly translate: TranslateService,
    private readonly applicationRef: ApplicationRef,
  ) {}

  ngOnInit(): void {
    this.useLanguage(getCookie('lang') ?? 'es');
    window.addEventListener('lang', this.handleLanguageChange);
  }

  ngOnDestroy(): void {
    window.removeEventListener('lang', this.handleLanguageChange);
  }

  private useLanguage(lang?: string): void {
    if (!lang) {
      return;
    }

    this.translate.use(lang).subscribe(() => {
      this.applicationRef.tick();
    });
  }
}

function getCookie(name: string): string | undefined {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);

  if (parts.length === 2) {
    return parts.pop()?.split(';').shift();
  }

  return undefined;
}
