import { CarnetService } from './../services/carnet.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-carnet',
  templateUrl: './create-carnet.component.html',
  styleUrls: ['./create-carnet.component.scss'],
})
export class CreateCarnetComponent implements OnInit {
  carnet: any;
  search: any;

  constructor(public carnetService: CarnetService, public router: Router) {
    this.carnet = {
      nom: '',
      description: '',
    };
  }

  addCarnet(): void{
    this.carnet.nom = this.carnet.nom.trim();
    this.carnet.description = this.carnet.description.trim();
    if (this.carnet.nom.length == 0 && this.carnet.description.length == 0) {
        console.log("Erreur champs vide!!!");
        alert("Veuillez saisir les champs!!!");
    }else{
      this.carnetService.addCarnet(this.carnet);
      this.router.navigate(['/carnet']);
    }
  }

  reset(): void {
    this.carnet = {
      nom: '',
      description: '',
    };
  }

  ngOnInit(): void {}
}
