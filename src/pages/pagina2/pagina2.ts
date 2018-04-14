import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';




@Component({
  selector: 'page-pagina2',
  templateUrl: 'pagina2.html',
})
export class Pagina2Page {

  mutantes:any=[
    {
      nombre:"Magneto",
      poder:"Controlar metales"
    },
    {
      nombre:"Wolverine",
      poder:"Regeneracion acelerada"

    },
    {
      nombre:"Profesor X",
      poder:"Poderes psiquicos"
    },
    {
      nombre:"Gambito",
      poder:"Cargar objetos inanimados con enegia"
    }
  ]

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  irPagina3(mutante:any){
    console.log(mutante);
  }

}
