import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { PostProvider } from '../../providers/post-provider';
import { Storage } from '@ionic/storage';

import { RegisterPage } from '../register/register';
import { TabsPage } from '../tabs/tabs';
//import { HomePage } from '../home/home';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  pemandu_username: string;
  pemandu_password: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController, private postPvdr: PostProvider, private storage: Storage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login(){
    if(this.pemandu_username != null && this.pemandu_password != null ){
      let body = {
        pemandu_username: this.pemandu_username,
        pemandu_password: this.pemandu_password,
        aksi: 'login'
      };

      this.postPvdr.postData(body, 'file_aksi.php').subscribe((data) =>{
        var alertpesan = data.msg;
        if(data.success){
          this.storage.set('session_storage', data.result);
          this.navCtrl.setRoot(TabsPage);
          const toast = this.toastCtrl.create({
            message: 'Login Succesful',
            duration: 1000
          });
          toast.present();
        }else{
          const toast = this.toastCtrl.create({
            message: alertpesan,
            duration: 3000
          });
          toast.present();
        }

      });

    }else{
      const toast = this.toastCtrl.create({
        message: 'username or password invalid',
        duration: 3000
      });
      toast.present();
    }
  }

  formRegister(){
    this.navCtrl.push(RegisterPage);
  }

}
