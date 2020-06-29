import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { NgxQRCodeModule } from 'ngx-qrcode2';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { TabsPage } from '../pages/tabs/tabs';
import { StudentPage } from '../pages/student/student';
import { AttendancePage } from '../pages/attendance/attendance';
import { QrcodePage } from '../pages/qrcode/qrcode';
import { StudentdetailPage } from '../pages/studentdetail/studentdetail';
import { GeolocationPage } from '../pages/geolocation/geolocation';
import { AbsencePage } from '../pages/absence/absence';

import { HttpModule } from '@angular/http';
import { PostProvider } from '../providers/post-provider';
import { IonicStorageModule } from '@ionic/storage';
import { SMS } from '@ionic-native/sms';
import { Geolocation } from '@ionic-native/geolocation';
import { GoogleMaps } from '@ionic-native/google-maps';





@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    RegisterPage,
    StudentPage,
    AttendancePage,
    QrcodePage,
    TabsPage,
    StudentdetailPage,
    GeolocationPage,
    AbsencePage
  ],

  imports: [
    BrowserModule,
    HttpModule,
    NgxQRCodeModule,
    IonicStorageModule.forRoot(),
    IonicModule.forRoot(MyApp)
  ],

  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    RegisterPage,
    StudentPage,
    AttendancePage,
    QrcodePage,
    TabsPage,
    StudentdetailPage,
    GeolocationPage,
    AbsencePage
  ],
  
  providers: [
    StatusBar,
    SplashScreen,
    PostProvider,
    BarcodeScanner,
    SMS,
    Geolocation,
    GoogleMaps,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
