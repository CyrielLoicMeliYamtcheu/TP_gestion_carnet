import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarnetPageComponent } from './carnet-page/carnet-page.component';

const routes: Routes = [
  { path: '', component: CarnetPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
