import { Component, OnInit } from '@angular/core';
import { CarnetService } from './../services/carnet.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-document-update',
  templateUrl: './document-update.component.html',
  styleUrls: ['./document-update.component.scss']
})
export class DocumentUpdateComponent implements OnInit {
  Docs: any;
  Doc: any;
  id_carnet : any;
  listeDocument: any;
  listeDocumentByIdCarnet: string[] = [];

  constructor(
    public DocumentupdateService: CarnetService,
    public router: Router,
    public route: ActivatedRoute
  ) {
    this.Doc = {
      nom: '',
      categorie: '',
   };
  }

  update(): void {
    this.DocumentupdateService.updateDocument(this.Doc);
    this.router.navigate(['/document/' + this.id_carnet]);
  }
  reset(): void{
  this.Doc = { ...this.Docs};
}
  ngOnInit(): void {
    let id: any;
    this.DocumentupdateService.getListeDocument();
    this.route.params.subscribe((params) => (id = params['id']));
    this.Docs = this.DocumentupdateService.getDocById(id);
    this.Doc = { ...this.Docs};
    console.log(this.Docs);

    this.id_carnet = this.Docs.id_carnet;
   
    console.log("id carnet")
    console.log(this.id_carnet);



  }
  

}
