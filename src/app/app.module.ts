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
import { Home2} from './pages/home2/home2';
import { Pagina1 } from './pages/pagina1/pagina1';
import { Pagina2 } from './pages/pagina2/pagina2';

//services
import { Service } from './services/service';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Login,
    Home2,
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
    Home2,
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
