import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ApiService } from './../api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.page.html',
  styleUrls: ['./questions.page.scss'],
})
export class QuestionsPage implements OnInit {
question: any;
opt1: any;
opt2: any;
opt3: any;
opt4: any;
answer:any;
data1:any;
error: any;


  constructor(private service : ApiService,private AlertController : AlertController , private route : Router) { }

  ngOnInit() {
  }

  create(){

    if(this.question==""||this.question==null){
      this.error="Please enter Question"
      this.presentAlert2(this.error);

    }else if(this.opt1==""||this.opt1==null){
      this.error="Please enter Option1"
      this.presentAlert2(this.error);

    }
    else if(this.opt2==""||this.opt2==null){
      this.error="Please enter Option2"
      this.presentAlert2(this.error);

    }else if(this.opt3==""||this.opt3==null){
      this.error="Please enter Option3"
      this.presentAlert2(this.error);

    }else if(this.opt4==""||this.opt4==null){
      this.error="Please enter Option4"
      this.presentAlert2(this.error);

    }else{
      this.service.create(this.question,this.opt1,this.opt2,this.opt3,this.opt4).subscribe(data=>{
        this.data1=data;
        console.log(this.data1);
        if(this.data1.status=="200 OK"){
          this.presentAlert();
        }else{
          this.presentAlert1();
        }
      })
    }
    
  }

  async presentAlert() {
    const alert = await this.AlertController.create({
      header: 'Alert',
      message: 'Poll Added Successfully!',
      buttons: [{
        text: 'OK',
        role: 'OK',
        handler: () => {
          this.route.navigate(['/dashboard']);
        },
      },],
    });

    await alert.present();
  }

  async presentAlert1() {
    const alert = await this.AlertController.create({
      header: 'Alert',
      message: 'Poll Addition Failed!',
      buttons: ['OK'],
    });

    await alert.present();
  }

  async presentAlert2(error1: any) {
    const alert = await this.AlertController.create({
      header: 'Alert',
      message: error1,
      buttons: ['OK'],
    });

    await alert.present();
  }

  navigate(){
    this.route.navigate(['/dashboard']);
  }

}
