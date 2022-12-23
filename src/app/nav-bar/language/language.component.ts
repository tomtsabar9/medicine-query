import { Component } from '@angular/core';

import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.css']
})
export class LanguageComponent {
  languageMap = new Map<string, string>;

  constructor(public translate: TranslateService){
    translate.addLangs(['en', 'he', 'ar']);
    translate.setDefaultLang('en');
    this.initializeLanguageMap()
  }

  initializeLanguageMap(): void {  
    this.translate.getLangs().forEach(language => 
      this.translate.getTranslation(language).subscribe(value => 
        this.languageMap.set(language, value.currentLang)))
  }

  switchLanguage(language: string): void {
    this.translate.use(language);
  }
}
