import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TitreComponent } from './titre/titre.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CarnetPageComponent } from './carnet-page/carnet-page.component';
import { ShowdownModule } from 'ngx-showdown';
import { FormsModule } from '@angular/forms';
import { DocumentPageComponent } from './document-page/document-page.component';
import { DocumentUpdateComponent } from './document-update/document-update.component';

@NgModule({
  declarations: [
    AppComponent,
    TitreComponent,
    NavbarComponent,
    CarnetPageComponent,
    DocumentPageComponent,
    DocumentUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ShowdownModule.forRoot({emoji: true, noHeaderId: true, flavor: 'github'}),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
