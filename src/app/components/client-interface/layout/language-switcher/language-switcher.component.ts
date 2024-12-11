import { Component } from '@angular/core';
import { TranslocoDirective, TranslocoService } from '@jsverse/transloco';

@Component({
  selector: 'app-language-switcher',
  standalone: true,
  imports: [],
  templateUrl: './language-switcher.component.html',
  styleUrl: './language-switcher.component.css'
})
export class LanguageSwitcherComponent {

  currentLang: string = 'en';
  lang: any = 'NO';
  direction!: string
  class!: string
  constructor(private _translocoService: TranslocoService) { }


  ngOnInit(): void {
    const defaultLang = navigator.language == "he" ? "he" : "en";
    this._translocoService.setActiveLang(defaultLang);
    this.currentLang = this._translocoService.getActiveLang();

    this.direction = (this.currentLang === 'he') ? 'rtl' : 'ltr';
    document.documentElement.dir = this.direction;
    this.class = this.currentLang === 'he' ? 'switcher-he' : 'switcher-en'
  }
  onChange(langCode: string): void {
    this._translocoService.setActiveLang(langCode);
    this.currentLang = langCode;
    this.direction = (this.currentLang === 'he') ? 'rtl' : 'ltr';

    document.documentElement.dir = this.direction;
    this.class = this.currentLang === 'he' ? 'switcher-he' : 'switcher-en'
  }

  getEnColor(): string {
    return this.currentLang === 'en' ? 'white' : '#9E581C'
  }
  getHeColor(): string {
    return this.currentLang === 'he' ? 'white' : '#9E581C'
  }

}
