import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { PostProvider } from '../../providers/post-provider';

/**
 * Generated class for the QrcodePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-qrcode',
  templateUrl: 'qrcode.html',
})
export class QrcodePage {
  qrData = null;
  scannedCode = null;
  data: any;
  users: any =[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private barcodeScanner: BarcodeScanner, private postPvdr: PostProvider) {
  }

  ionViewDidLoad() {
    this.users = [];
    this.scannedCode = this.navParams.get('scannedCode');
  }

  scanCode() {
    this.barcodeScanner.scan().then(barcodeData => {
    this.scannedCode = barcodeData.text;

      let body = {
        scannedCode : this.scannedCode,
        aksi : 'add_user'
      };
  
      this.postPvdr.postData(body, 'qr_aksi.php').subscribe(data =>{
        for(let user of data.result){
          this.users.push(user);
          console.log(data.result)
        }
      });

    }) 

  }

}
