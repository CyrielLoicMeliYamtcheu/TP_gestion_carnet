import { Injectable } from '@angular/core';
import { elementAt } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CarnetService {
  listeCarnet: any;
  listeDocument: any;
  constructor() {
    this.listeCarnet = [];
    this.listeDocument = [];
  }

  // permet de recupérer les elements depuis le localStorage

  getListeCarnet(): [] {
    let res = localStorage.getItem('carnet');
    if (res != null) this.listeCarnet = JSON.parse(res);
    return this.listeCarnet;
  }

  getListeDocument(): [] {
    let res = localStorage.getItem('Doc');
    if (res != null) this.listeDocument = JSON.parse(res);
    return this.listeDocument;
  }

  generateId(): number {
    return Date.now();
  }

  addCarnet(carnet: any): void {
    const id = this.generateId();
    carnet.id = id;
    this.listeCarnet.push(carnet);
    localStorage.setItem('carnet', JSON.stringify(this.listeCarnet));
  }

  addDocument(Doc: any, carnet: any): void {
    const id = this.generateId();
    Doc.id = id;
    Doc.id_carnet = carnet.id;
    this.listeDocument.push(Doc);
    console.log(this.listeDocument);
    localStorage.setItem('Doc', JSON.stringify(this.listeDocument));
  }

  getcarnetById(id: number): any {
    return this.listeCarnet.find((elem: any) => elem.id == id);
  }

  getDocById(id: number): any {
    return this.listeDocument.find((elem: any) => elem.id == id);
  }

  getDocumentById(carnet: any): any {
    return this.listeDocument.find((elem: any) => elem.id_carnet == carnet.id);
  }

  updateCarnet(carnet: any): void {
    const id = carnet.id;
    let elem = this.getcarnetById(id);
    console.log('Allooooo');
    console.log(elem);
    if (!elem.id) alert('Erreur lors de la modification');
    else {
      let indice = this.listeCarnet.indexOf(elem);
      if (indice > -1) this.listeCarnet[indice] = carnet;
      localStorage.setItem('carnet', JSON.stringify(this.listeCarnet));
      this.getListeCarnet();
    }
  }

  updateDocument(Doc: any): void {
    const id = Doc.id;
    let elem = this.getDocById(id);
    console.log(elem);
    if (!elem.id) alert('Erreur lors de la modification');
    else {
      let indice = this.listeDocument.indexOf(elem);
      if (indice > -1) this.listeDocument[indice] = Doc;
      localStorage.setItem('Doc', JSON.stringify(this.listeDocument));
      this.getListeDocument();
    }
  }

  deleteCarnet(id: number): void {
    let elem = this.getcarnetById(id);
    if (!elem.id) alert('Erreur lors de la suppression');
    else {
      let indice = this.listeCarnet.indexOf(elem);
      this.listeCarnet.splice(indice, 1);
      localStorage.setItem('carnet', JSON.stringify(this.listeCarnet));
      this.getListeCarnet();
    }
  }

  deleteDocument(id: number): void {
    let elem = this.getDocById(id);
    if (!elem.id) alert('Erreur lors de la suppression');
    else {
      let indice = this.listeDocument.indexOf(elem);
      this.listeDocument.splice(indice, 1);
      localStorage.setItem('Doc', JSON.stringify(this.listeDocument));
      this.getListeDocument();
    }
  }
}
