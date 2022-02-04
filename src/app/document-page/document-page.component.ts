import { Router, ActivatedRoute } from '@angular/router';
import { CarnetService } from './../services/carnet.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-document-page',
  templateUrl: './document-page.component.html',
  styleUrls: ['./document-page.component.scss'],
})
export class DocumentPageComponent implements OnInit {
  carnets: any;
  carnet: any;
  id_carnet: any;
  listeDocument: any;
  id_carnet_doc: any;
  listeDocumentByIdCarnet: string[] = [];
  Doc: string[] = [];
  search: any;
  nom_carnet: string = 'Gestion des documents pour le ';
  constructor(
    public carnetService: CarnetService,
    public router: Router,
    public route: ActivatedRoute
  ) {
    this.search = '';
  }

  deleteDocument(id: number): void {
    let result = confirm('etes vous sure de vouloir supprimer le document?');
    if (result) this.carnetService.deleteDocument(id);
  }

  ngOnInit(): void {
    let id: any;
    this.carnetService.getListeCarnet();
    this.route.params.subscribe((params) => (id = params['id']));
    this.carnets = this.carnetService.getcarnetById(id);
    this.carnet = { ...this.carnets };
    this.nom_carnet += this.carnet.nom;
    this.id_carnet = this.carnet.id;

    this.listeDocument = this.carnetService.getListeDocument();
    // this.listeDocument = this.carnetService.getListDocument(this.id_carnet);


    for (let i = 0; i < this.listeDocument.length; i++) {
      if (this.listeDocument[i].id_carnet == this.id_carnet) {
        this.listeDocumentByIdCarnet.push(this.listeDocument[i]);
      }
    }
    this.listeDocument = [];
    for (let i = 0; i < this.listeDocumentByIdCarnet.length; i++) {
      this.listeDocument.push(this.listeDocumentByIdCarnet[i]);
    }

    

  }

}
