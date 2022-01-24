import { Injectable } from '@angular/core';
import { elementAt } from 'rxjs';

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

addCarnet(carnet:any): void {
  const id = this.generateId();
  carnet.id = id;
  this.listeCarnet.push(carnet);
  localStorage.setItem("carnet", JSON.stringify(this.listeCarnet));
}


getcarnetById(id: number): any {
  return this.listeCarnet.find((elem: any) => elem.id == id);
}

updateCarnet(carnet: any): void{
const id = carnet.id;
let elem = this.getcarnetById(id);
console.log("Allooooo");
console.log(elem);
if (!elem.id) alert ('Erreur lors de la modification');
else{
  let indice = this.listeCarnet.indexOf(elem);
  if (indice > -1) this.listeCarnet[indice] = carnet;
  localStorage.setItem("carnet", JSON.stringify(this.listeCarnet));
  this.getListeCarnet();
}

}

}
