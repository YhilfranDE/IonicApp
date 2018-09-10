import { Component } from '@angular/core';
import { Service } from '../../services/service';

@Component({
  selector: 'pagina1',
  templateUrl: 'pagina1.html',
  //styleUrls: ['pagina1.css']
})
export class Pagina1 {


  constructor(private auth: Service){

  }


}