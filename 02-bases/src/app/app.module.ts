import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { HeroComponent } from './hero/hero/hero.component';
import { ListComponent } from './hero/list/list.component';
import { DbzModule } from './dbz/dbz.module';
import { DbzMainPageComponent } from './dbz/pages/main-page.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    HeroComponent,
    ListComponent,
    DbzMainPageComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
