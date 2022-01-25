import { Component, OnInit } from '@angular/core';
import { CarnetService } from '../services/carnet.service';


@Component({
  selector: 'app-carnet-page',
  templateUrl: './carnet-page.component.html',
  styleUrls: ['./carnet-page.component.scss']
})
export class CarnetPageComponent implements OnInit {
  search: string;
  listeCarnet: any;

  constructor(public carnetService : CarnetService) {

    this.search ="";
  }


  ngOnInit(): void {
    this.listeCarnet = this.carnetService.getListeCarnet();
  }

  deleteCarnet(id:number):void{
    let result=confirm("etes vous sure de vouloir supprimer le carnet?") ;
    if (result)
    this.carnetService.deleteCarnet(id);

  }


}

