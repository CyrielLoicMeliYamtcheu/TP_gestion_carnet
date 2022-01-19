import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarnetPageComponent } from './carnet-page/carnet-page.component';
import { DocumentPageComponent } from './document-page/document-page.component';
import { DocumentUpdateComponent } from './document-update/document-update.component';

const routes: Routes = [
  { path: '', component: CarnetPageComponent },
  { path: 'document', component: DocumentPageComponent},
  { path: 'document/update', component: DocumentUpdateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
