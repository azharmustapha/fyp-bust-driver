import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
import { PostProvider } from '../../providers/post-provider';
import { LoginPage } from '../login/login';
import { Storage } from '@ionic/storage';
import { StudentdetailPage } from '../studentdetail/studentdetail';
import { GeolocationPage } from '../geolocation/geolocation';

/**
 * Generated class for the StudentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-student',
  templateUrl: 'student.html',
})
export class StudentPage {

  users: any =[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage, private appCtrl: App, private postPvdr: PostProvider) {
  }

  ionViewDidLoad() {
    this.users = [];
    this.loaduser();
  }

  loaduser(){
    let body ={
      aksi: 'get_user'
    };

    this.postPvdr.postData(body, 'student_aksi.php').subscribe(data =>{
      for(let user of data.result){
        this.users.push(user);
      }
    });
  }

  logout(){
    this.storage.clear();
    this.appCtrl.getRootNav().setRoot(LoginPage);
  }

  geolocation(){
    this.navCtrl.push(GeolocationPage);
  }

  studentdetail(id){
    this.navCtrl.push(StudentdetailPage, {
      'pelajar_id' : id
    })
    console.log(id)
  }

}
