import { Component } from '@angular/core';
import { TranslocoDirective, TranslocoService } from '@jsverse/transloco';

@Component({
  selector: 'app-language-switcher',
  standalone: true,
  imports: [TranslocoDirective],
  templateUrl: './language-switcher.component.html',
  styleUrl: './language-switcher.component.css'
})
export class LanguageSwitcherComponent {

  currentLang?: string;
  defaultLang: string;

  constructor(private _translocoService: TranslocoService) {
    this.defaultLang = navigator.language == "he" ? "he" : "en";
    this._translocoService.setDefaultLang(this.defaultLang);
    this.currentLang = this._translocoService.getDefaultLang();
  }
 
onChange(event: Event): void {
  const target = event.target as HTMLSelectElement;
  const langCode = target.value;
  
  this._translocoService.setActiveLang(langCode);
  this.currentLang = langCode;
  console.log(this.currentLang);
}
}
