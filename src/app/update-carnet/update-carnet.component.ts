import { ActivatedRoute, Router } from '@angular/router';
import { CarnetService } from './../services/carnet.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-carnet',
  templateUrl: './update-carnet.component.html',
  styleUrls: ['./update-carnet.component.scss'],
})
export class UpdateCarnetComponent implements OnInit {
  carnets: any;
  carnet: any;

  constructor(
    public carnetupdateService: CarnetService,
    public router: Router,
    public route: ActivatedRoute
  ) {
    this.carnet = {
      nom: '',
      description: '',
    };
  }
  update(): void {
    this.carnet.nom = this.carnet.nom.trim();
    this.carnet.description = this.carnet.description.trim();
    if(this.carnet.nom.length == 0 && this.carnet.description.length == 0){
      console.log("Erreur champs vides!!!");
      alert("Veuillez saisir les champs!!!");
    }else{
      this.carnetupdateService.updateCarnet(this.carnet);
      this.router.navigate(['/carnet']);
    }

  }
  reset(): void {
    this.carnet = { ...this.carnets };
  }
  ngOnInit(): void {
    let id: any;
    this.carnetupdateService.getListeCarnet();
    this.route.params.subscribe((params) => (id = params['id']));
    this.carnets = this.carnetupdateService.getcarnetById(id);
    this.carnet = { ...this.carnets };
    console.log(this.carnet);
  }
}
