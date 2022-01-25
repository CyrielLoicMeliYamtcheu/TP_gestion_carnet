import { Router, ActivatedRoute } from '@angular/router';
import { CarnetService } from './../services/carnet.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-document-page',
  templateUrl: './document-page.component.html',
  styleUrls: ['./document-page.component.scss']
})
export class DocumentPageComponent implements OnInit {

  carnets: any
  carnet: any;
  id_carnet: any;
  nom_carnet: string = "Gestion des documents pour le "
  constructor(public carnetService: CarnetService, public router: Router, public route: ActivatedRoute) { }

  ngOnInit(): void {
    let id: any;
    this.carnetService.getListeCarnet();
    this.route.params.subscribe((params) => (id = params['id']));
    this.carnets = this.carnetService.getcarnetById(id);
    this.carnet = { ...this.carnets};
    console.log(this.carnet);
    this.nom_carnet += this.carnet.nom;
    this.id_carnet = this.carnet.id;
    console.log(this.id_carnet);
    console.log(this.nom_carnet);

  }


}
