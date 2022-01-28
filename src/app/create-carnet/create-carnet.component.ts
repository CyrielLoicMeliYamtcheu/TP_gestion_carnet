import { CarnetService } from './../services/carnet.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-carnet',
  templateUrl: './create-carnet.component.html',
  styleUrls: ['./create-carnet.component.scss']
})
export class CreateCarnetComponent implements OnInit {
  carnet: any;
  search: any;

  constructor(public carnetService : CarnetService, public router : Router  ) {
    this.carnet = {
      nom: '',
      description: ''
    };


  }



   addCarnet(): void{
    this.carnetService.addCarnet(this.carnet);
    this.router.navigate(['/carnet']);
   }

   reset(): void{
     this.carnet = {
      nom: '',
      description: ''
     };
   }

  ngOnInit(): void {
  }

}
