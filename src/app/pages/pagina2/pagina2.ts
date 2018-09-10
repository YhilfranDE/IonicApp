import { Component } from '@angular/core';
import { Service } from '../../services/service';

@Component({
  selector: 'pagina2',
  templateUrl: 'pagina2.html'
})
export class Pagina2 {


  constructor(private auth: Service){

  	this.verPerfil();

  }

  public verPerfil(){
    let user_perfil = this.auth.getUserInfo();
    console.log("ver perfil",user_perfil);
  }

}