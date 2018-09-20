import { ErrorHandler, NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { BrowserModule } from '@angular/platform-browser';
import { MyApp } from './app.component';

//Pages

import { HomePage } from './pages/home/home';
import { Login } from './pages/login/login';
import { Menu} from './pages/menu/menu';
import { Pagina1 } from './pages/pagina1/pagina1';
import { Pagina2 } from './pages/pagina2/pagina2';

//services
import { Service } from './services/service';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Login,
    Menu,
    Pagina1,
    Pagina2
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    Login,
    Menu,
    Pagina1,
    Pagina2    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Service,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
