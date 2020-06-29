import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { TabsPage } from '../tabs/tabs';
import { PostProvider } from '../../providers/post-provider';
import { AbsencePage } from '../absence/absence';

/**
 * Generated class for the StudentdetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-studentdetail',
  templateUrl: 'studentdetail.html',
})
export class StudentdetailPage {

  users: any =[];
  pelajar_id: number;

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage, private appCtrl: App, private postPvdr: PostProvider) {
  }

  ionViewDidLoad() {
    this.users = [];
    this.pelajar_id = this.navParams.get('pelajar_id');
    this.single();
  }

  single(){
    let body ={
      pelajar_id : this.pelajar_id,
      aksi : 'get_datasingle'
    };

    this.postPvdr.postData(body, 'student_aksi.php').subscribe(data =>{
      for(let user of data.result){
        this.users.push(user);
        console.log(data.result)
      }
    });
  }

  tabspage(){
    this.storage.clear();
    this.appCtrl.getRootNav().setRoot(TabsPage);
  }

  absence(){
    this.navCtrl.push(AbsencePage);
  }

}
