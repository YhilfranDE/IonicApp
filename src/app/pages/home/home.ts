import { Component } from '@angular/core';
import { Service } from '../../services/service';
import { NavController, AlertController } from 'ionic-angular';

//Páginas
import { Login } from '../login/login';
import { Pagina2 } from '../pagina2/pagina2';
import { Pagina1 } from '../pagina1/pagina1';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public bookings: any;
  public generalLoading: boolean = false;
  firstName = '';
  lastName = '';
  email = '';
  token = '';
  email2 = 'contacto@tuten.cl';
  items : any[] = [];
  

  constructor(public navCtrl: NavController, 
              private auth: Service,
              public alertCtrl: AlertController,
              private nav: NavController){

    this.Books();
  }

  Books(){

   this.generalLoading = true;
   let info = this.auth.getUserInfo();
   let rut;
   let json_bk :any;
   let i = 0;

    //console.log('informacion:', info);
    this.firstName = info['firstName'];
    this.lastName = info['lastName'];
    this.email = info['email'];
    this.token = info['token'];

   rut = this.auth.getBookings(this.token, this.email, this.email2);
    rut.subscribe(res => {
        let data = res.json();
        this.bookings = data;
        //console.log("libros",this.bookings);
        this.bookings.forEach(x =>{
          
          json_bk = JSON.parse(x.bookingFields);

          this.bookings[i]['firstName'] = json_bk.firstName;
          this.bookings[i]['lastName'] = json_bk.lastName;
          i++;

        }); 
        // console.log(i);
        // console.log("libros_ modificados",this.bookings);
        this.initializeItems();
        this.generalLoading = false;   

        }, (err) => {
          console.log(err);

        });   
  }


  public logout() {
    this.auth.logout().subscribe(succ => {
      this.navCtrl.setRoot(Login)
    });
  }

  initializeItems() {

    this.items = this.bookings;
    //console.log("desde initialize:", this.items);
  }

  getItems(ev) {
    
    // Reset items back to all of the items
    this.initializeItems()

    // set val to the value of the ev target
    var val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((book) => {
        book.bookingId = ''+book.bookingId;
        return (book.bookingId.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
    
    if (val.trim() == '') {
      this.Books();
    }// si el input de busqueda está vacío vuelvo a cargar los libros
  }


  verPerfil(){
    this.nav.setRoot(Pagina2);
  }

  openNavDetailsPage(book) {
    this.nav.push(Pagina1, { book: book });//push para pasar la data
  }


}