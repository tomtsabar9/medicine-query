import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { InfoButtonComponent } from './nav-bar/info-button/info-button.component';
import { LanguageComponent } from './nav-bar/language/language.component';
import { QuickSearchComponent } from './nav-bar/quick-search/quick-search.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    InfoButtonComponent,
    LanguageComponent,
    QuickSearchComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
