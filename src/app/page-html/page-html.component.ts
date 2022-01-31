import * as showdown from 'showdown';
import { Component, OnInit } from '@angular/core';
import { CarnetService } from './../services/carnet.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-page-html',
  templateUrl: './page-html.component.html',
  styleUrls: ['./page-html.component.scss']
})
export class PageHtmlComponent implements OnInit {
  Docs: any;
  Doc: any;
  text: string = `## A cool link Hello
  <a href="javascript:alert('Hello!')">click me</a>`;
  sanitize:boolean = true;
  options = {emoji: true}
  id_carnet: any;
  listeDocument: any;
  listeDocumentByIdCarnet: string[] = [];
  converter = new showdown.Converter();
  html : any;
  html2: any;
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
   reset(): void {
    this.Doc = { ...this.Docs };
  }
  ngOnInit(): void {
    let id: any;
    this.DocumentupdateService.getListeDocument();
    this.route.params.subscribe((params) => (id = params['id']));
    this.Docs = this.DocumentupdateService.getDocById(id);
    this.Doc = { ...this.Docs };
    console.log(this.Docs);

    this.id_carnet = this.Docs.id_carnet;

    console.log('id carnet');
    console.log(this.id_carnet);

   

// options : showdown.ShowdownOptions = {noHeaderId
 this.html = this.converter.makeHtml(this.Doc.nom ) ;
 this.html2 = this.converter.makeHtml(this.Doc.categorie);
 



 
  

   
  }
  

}
