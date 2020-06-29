import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { StudentPage } from '../student/student';
import { AttendancePage } from '../attendance/attendance';
import { QrcodePage } from '../qrcode/qrcode';

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
  
    studentPage = StudentPage;
    attendancePage = AttendancePage;
    qrcodePage = QrcodePage;


}
