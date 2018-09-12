import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

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
  
  book : any = {};

  constructor(private auth: Service, private nav: NavController){
     console.log("mostrando el libro: ",this.book);
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