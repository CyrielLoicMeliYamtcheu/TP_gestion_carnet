import { Component, OnInit } from '@angular/core';
import { CarnetService } from '../services/carnet.service';

@Component({
  selector: 'app-carnet-page',
  templateUrl: './carnet-page.component.html',
  styleUrls: ['./carnet-page.component.scss']
})
export class CarnetPageComponent implements OnInit {

  listeCarnet: any;
  constructor(public carnetService : CarnetService) { }

  ngOnInit(): void {
    this.listeCarnet = this.carnetService.getListeCarnet();
  }

}
