import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { SMS } from '@ionic-native/sms';
import { StudentPage } from '../student/student';

/**
 * Generated class for the AbsencePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-absence',
  templateUrl: 'absence.html',
})
export class AbsencePage {
  message:any;


  constructor(public navCtrl: NavController, public navParams: NavParams, private sms: SMS,public toastCtrl: ToastController) {
    this.message = '';
  }

  send(){
    this.sms.send("0135951629", this.message)
      .then(()=>{
        let toast = this.toastCtrl.create({
          message: 'Message send successfully',
          duration: 3000        });
        toast.present();
      },()=>{
        let toast = this.toastCtrl.create({
          message: 'Failure',
          duration: 3000        });
        toast.present();
      });
  }

  student(){
    this.navCtrl.push(StudentPage);
  }
}
