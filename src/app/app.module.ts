import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreercarnetComponent } from './creercarnet/creercarnet.component';
import { ModificationCarnetsComponent } from './modification-carnets/modification-carnets.component';

@NgModule({
  declarations: [
    AppComponent,
    CreercarnetComponent,
    ModificationCarnetsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
