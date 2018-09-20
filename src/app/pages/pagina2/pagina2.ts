import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

//Páginas

import { Login } from '../login/login';

//servicios
import { Service } from '../../services/service';

@Component({
  selector: 'pagina2',
  templateUrl: 'pagina2.html'
})
export class Pagina2 {

	user_perfil : any;
  public generalLoading: boolean = false;

  constructor(private auth: Service,
              private nav: NavController){

  	this.verPerfil();

  }

  public verPerfil(){
    this.generalLoading = true;
    this.user_perfil = this.auth.getUserInfo();    
    //console.log("ver perfil",this.user_perfil);
    this.generalLoading = false;
  }

  public logout() {
    this.auth.logout().subscribe(succ => {
      this.nav.setRoot(Login)
    });
  }

}