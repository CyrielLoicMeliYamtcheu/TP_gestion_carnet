import { UpdateCarnetComponent } from './update-carnet/update-carnet.component';
import { HomepageComponent } from './homepage/homepage.component';
import { CreateDocumentComponent } from './create-document/create-document.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarnetPageComponent } from './carnet-page/carnet-page.component';
import { DocumentPageComponent } from './document-page/document-page.component';
import { DocumentUpdateComponent } from './document-update/document-update.component';
import { CreateCarnetComponent } from './create-carnet/create-carnet.component';

const routes: Routes = [
  { path: '' , component: HomepageComponent },
  { path: 'carnet', component: CarnetPageComponent },
  { path: 'carnet/add', component: CreateCarnetComponent },
  { path: 'carnet/update/:id', component: UpdateCarnetComponent },
  { path: 'document', component: DocumentPageComponent},
  { path: 'document/add', component: CreateDocumentComponent},
  { path: 'document/update/:id', component: DocumentUpdateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
