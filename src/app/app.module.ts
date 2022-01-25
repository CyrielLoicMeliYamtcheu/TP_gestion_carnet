import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { TitreComponent } from './titre/titre.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CarnetPageComponent } from './carnet-page/carnet-page.component';
import { ShowdownModule } from 'ngx-showdown';
import { FormsModule } from '@angular/forms';
import { DocumentPageComponent } from './document-page/document-page.component';
import { DocumentUpdateComponent } from './document-update/document-update.component';
import { CreateDocumentComponent } from './create-document/create-document.component';
import { CreateCarnetComponent } from './create-carnet/create-carnet.component';
import { HomepageComponent } from './homepage/homepage.component';
import { UpdateCarnetComponent } from './update-carnet/update-carnet.component';
import { SearchcarnetPipe } from './searchcarnet.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    TitreComponent,
    NavbarComponent,
    CarnetPageComponent,
    DocumentPageComponent,
    DocumentUpdateComponent,
    CreateDocumentComponent,
    CreateCarnetComponent,
    HomepageComponent,
    UpdateCarnetComponent,
    SearchcarnetPipe,
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule,ShowdownModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
