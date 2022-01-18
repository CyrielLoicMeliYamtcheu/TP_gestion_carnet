import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TitreComponent } from './titre/titre.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CarnetPageComponent } from './carnet-page/carnet-page.component';

@NgModule({
  declarations: [
    AppComponent,
    TitreComponent,
    NavbarComponent,
    CarnetPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
