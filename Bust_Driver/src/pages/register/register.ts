import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { PostProvider } from '../../providers/post-provider';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  pemandu_username: string = "";
  pemandu_password: string = "";
  confirm_password: string = "";
  pemandu_fullname: string = "";
  pemandu_ic: string = "";

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController, private postPvdr: PostProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  addRegister(){
    console.log(this.pemandu_fullname)

    // validation 
    if(this.pemandu_fullname==""){
        const toast = this.toastCtrl.create({
          message: 'Name is required',
          duration: 3000
        });
        toast.present();
      
      
    }else if(this.pemandu_ic==""){
        const toast = this.toastCtrl.create({
          message: 'Mobile Number is required',
          duration: 3000
        });
        toast.present();
      

    }else if(this.pemandu_username==""){
        const toast = this.toastCtrl.create({
          message: 'Username is required',
          duration: 3000
        });
        toast.present();
      

    }else if(this.pemandu_password==""){
        const toast = this.toastCtrl.create({
          message: 'Password is required',
          duration: 3000
        });
        toast.present();
      

    }else if(this.pemandu_password!=this.confirm_password){
        const toast = this.toastCtrl.create({
          message: 'Invalid Password',
          duration: 3000
        });
        toast.present();

      }else{

        let body ={
          pemandu_fullname: this.pemandu_fullname,
          pemandu_ic: this.pemandu_ic,
          pemandu_username: this.pemandu_username,
          pemandu_password: this.pemandu_password,
          aksi: 'add_register'
        };

        this.postPvdr.postData(body, 'file_aksi.php').subscribe((data) =>{
          var alertpesan = data.msg;
          if(data.success){
            this.navCtrl.pop();
            const toast = this.toastCtrl.create({
              message: 'Register Succesful',
              duration: 3000
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

      }
      

  }

  formLogin(){
    this.navCtrl.pop();
  }

}
