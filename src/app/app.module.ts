import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations"
import { HttpClientModule } from "@angular/common/http"
// Importação necessária para trabalhar com http lembrar de colocar no imports
import { FormsModule } from '@angular/forms';
// Importação para trabalhar com formulários no angular
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
// Importação de ícones

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherHomeComponent } from './modules/wheater/page/weather-home/weather-home.component';
import { WeatherCardComponent } from './modules/wheater/components/weather-card/weather-card.component';




@NgModule({
  declarations: [
    AppComponent,
    WeatherHomeComponent,
    WeatherCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
