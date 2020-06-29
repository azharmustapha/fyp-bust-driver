import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PostProvider } from '../../providers/post-provider';

/**
 * Generated class for the AttendancePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-attendance',
  templateUrl: 'attendance.html',
})
export class AttendancePage {

  users: any =[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private postPvdr: PostProvider) {
  }

  ionViewDidLoad() {
    this.users = [];
    this.loadqr();
  }

  loadqr(){
    let body ={
      aksi: 'get_attendance'
    };

    this.postPvdr.postData(body, 'qr_aksi.php').subscribe(data =>{
      for(let user of data.result){
        this.users.push(user);
      }
    });
  }

  doRefresh(refresher) {
    console.log('Begin async operation', refresher);
    let body ={
      aksi: 'get_attendance'
    };

    this.postPvdr.postData(body, 'qr_aksi.php').subscribe(data =>{
      for(let user of data.result){
        this.users.shift(user);
        this.users.push(user);
        refresher.complete();
      }
    });
  }

}
