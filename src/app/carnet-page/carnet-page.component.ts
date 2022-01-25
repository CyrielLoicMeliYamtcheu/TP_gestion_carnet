import { Component, OnInit } from '@angular/core';
import { CarnetService } from '../services/carnet.service';

@Component({
  selector: 'app-carnet-page',
  templateUrl: './carnet-page.component.html',
  styleUrls: ['./carnet-page.component.scss']
})
export class CarnetPageComponent implements OnInit {

  listeCarnet: any;
  listeNom: string[] = [];
  listeDescription: string[] = [];
  searchText = ""
  constructor(public carnetService : CarnetService) { }


  getListeNom(): string[] {
    let tailleListe = this.listeCarnet.length;
    console.log(tailleListe)
    for(let i = 0; i < tailleListe; i++){
      this.listeNom.push(this.listeCarnet[i].nom);
    }

    return this.listeNom;

  }


  getListeDescription(): string[] {
    let tailleListe = this.listeCarnet.length;
    console.log(tailleListe)
    for(let i = 0; i < tailleListe; i++){
      this.listeDescription.push(this.listeCarnet[i].description);
    }

    return this.listeDescription;

  }

  ngOnInit(): void {
    this.listeCarnet = this.carnetService.getListeCarnet();
    let res = this.getListeNom();
    let des = this.getListeDescription();
    console.log(res);
    console.log(des);
  }
  deleteCarnet(id:number):void{
    let result=confirm("etes vous sure de vouloir supprimer le carnet?") ;
    if (result)
    this.carnetService.deleteCarnet(id);

  }





}

