import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CarnetService } from '../services/carnet.service';

@Component({
  selector: 'app-create-document',
  templateUrl: './create-document.component.html',
  styleUrls: ['./create-document.component.scss'],
})
export class CreateDocumentComponent implements OnInit {
  carnets: any;
  id_carnet: any;
  Doc: any;

  constructor(
    public carnetService: CarnetService,
    public router: Router,
    public route: ActivatedRoute
  ) {
    this.Doc = { nom: '', categorie: '' };
  }

  addDoc(): void {
    this.carnetService.addDocument(this.Doc, this.carnets);
    this.router.navigate(['/document/' + this.id_carnet]);
  }

  reset(): void {
    this.Doc = {
      nom: '',
      categorie: '',
    };
  }

  // format = { nom : "#doc1", categorie:"##cat1"}

  ngOnInit(): void {
    let id: any;
    this.carnetService.getListeCarnet();
    this.route.params.subscribe((params) => (id = params['id']));
    this.carnets = this.carnetService.getcarnetById(id);
    console.log(id);
    this.id_carnet = id;
  }
}
