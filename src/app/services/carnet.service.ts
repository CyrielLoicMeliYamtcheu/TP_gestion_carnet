import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarnetService {

  listeCarnet: any;
  constructor() {
    this.listeCarnet = [];
   }

// permet de recupérer les elements depuis le localStorage

getListeCarnet(): []{

  let res = localStorage.getItem("carnet");
  if (res != null) this.listeCarnet = JSON.parse(res);
  return this.listeCarnet;
}

generateId(): number{
  return Date.now();
}

addCarnet(carnet:any): void{
  const id = this.generateId();
  carnet.id = id;
  this.listeCarnet.push(carnet);
  localStorage.setItem("carnet", JSON.stringify(this.listeCarnet));
}

}
