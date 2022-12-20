import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  email: any;
  password: any;

  constructor(private router : Router , private alertController : AlertController) {}

  login(){
    if(this.email=="admin@kotak.com" && this.password=="admin123"){
      this.router.navigate(['/dashboard'])
    }
    else{
      this.presentAlert();
    }
  }



  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alert',
      message: 'EmailId or Password Incorrect!',
      buttons: ['OK'],
    });

    await alert.present();
  }

}
