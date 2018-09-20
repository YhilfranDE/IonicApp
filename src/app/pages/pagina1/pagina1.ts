import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular'; //NavParams para recibir los datos de otro componente

//Páginas

import { Pagina2 } from '../pagina2/pagina2';
import { Login } from '../login/login';


//servicios
import { Service } from '../../services/service';

@Component({
  selector: 'pagina1',
  templateUrl: 'pagina1.html',
  //styleUrls: ['pagina1.css']
})
export class Pagina1 {
  
  book: any = {};

  constructor(private auth: Service, 
              private nav: NavController,
              private navP: NavParams){

    if (!navP.get('book')) {
      console.log("libro vacío");
    }else{
      this.book  =  navP.get('book');
      console.log("mostrando el libro: ",this.book);      
    }
  }

  verPerfil(){
    this.nav.setRoot(Pagina2);
  }

  public logout() {
    this.auth.logout().subscribe(succ => {
      this.nav.setRoot(Login)
    });
  }


}