import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    /* 
    {
      title: 'List',
      url: '/list',
      icon: 'list'
    }, */
    {
      title: 'Marcas',
      url: '/marcas',
      icon: 'star'
    },
    {
      title: 'Usuarios',
      url: '/usuarios',
      icon: 'people'
    },
    {
      title: 'Clientes',
      url: '/cliente',
      icon: 'people'
    },
    {
      title: 'Vehiculos',
      url: '/home',
      icon: 'car'
    },
    {
      title: 'Inspeccion',
      url: '/inspeccion',
      icon: 'checkmark-circle-outline'
    },
    {
      title: 'Renta Y devolucion',
      url: '/renta',
      icon: 'people'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
  
}
