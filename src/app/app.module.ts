import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeroesModule } from './heroes/heroes.module';
import { contadoModule } from './contador/contador.module';

@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    HeroesModule,
    contadoModule
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
