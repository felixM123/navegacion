import { Component } from '@angular/core';
import { NavController, NavParams,ModalController } from 'ionic-angular';

import {ModalPage} from "../index.paginas";

@Component({
  selector: 'page-ajustes',
  templateUrl: 'ajustes.html',
})
export class AjustesPage {

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public modalCtrl:ModalController  ) {
  }
  activarPrincipal(){
    this.navCtrl.parent.select(1);
  }
  mostrar_modal(){

      let modal=this.modalCtrl.create(ModalPage,{nombre:"Felix",edad:23});
      modal.present();
      modal.onDidDismiss(parametros=>{
        if(parametros){
        console.log("Data del modal:");
        console.log(parametros);
      }else{
        console.log("Se cerrro el modal sin parametros");
      }
      })
  }

}
