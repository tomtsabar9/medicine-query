import { Component } from "@angular/core";

import { TranslateService } from "@ngx-translate/core";
import { Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.css']
})
export class LanguageComponent {
  languageMap = new Map<string, string>;

  /*constructor(public translate: TranslateService){
    translate.addLangs(['en', 'he', 'ar']);
    translate.setDefaultLang('en');
    this.initializeLanguageMap();
  }*/

  constructor(
    public translate: TranslateService,
    @Inject(DOCUMENT) private document: Document
  ) {
    translate.addLangs(['en', 'he', 'ar']);
    translate.setDefaultLang('en');
    this.initializeLanguageMap();
  }

  initializeLanguageMap(): void {  
    this.translate.getLangs().forEach(language => 
      this.translate.getTranslation(language).subscribe(value => 
        this.languageMap.set(language, value.currentLang)))
  }

  switchLanguage(language: string): void {
    this.translate.use(language);
    this.changeCssLangage(language)
  }

  changeCssLangage(lang: string) {
    let htmlTag = this.document.getElementsByTagName(
      "html"
    )[0] as HTMLHtmlElement;
    htmlTag.dir = lang === "en" ? "lte" : "etl";
    this.translate.setDefaultLang(lang);
    this.translate.use(lang);
    this.changeCssFile(lang);
  }

  changeCssFile(lang: string) {
    let headTag = this.document.getElementsByTagName("head")[0] as HTMLHeadElement;
    let existingLink = this.document.getElementById("langCss") as HTMLLinkElement;
    let bundleName = "hebrewStyle";
   
    switch(lang) { 
      case "ar": { 
        bundleName = "arabicStyle.css";
        break; 
        } 
      case "en": { 
        bundleName = "englishStyle.css";
        break; 
        } 
    } 
    
    if (existingLink) {
       existingLink.href = bundleName;
    } else {
       let newLink = this.document.createElement("link");
       newLink.rel = "stylesheet";
       newLink.type = "text/css";
       newLink.id = "langCss";
       newLink.href = bundleName;
       headTag.appendChild(newLink);
    }
    }
}
