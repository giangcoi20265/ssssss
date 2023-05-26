import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'farmworktest';
  myname : string = ""
  // showInfo(){
  //   return this.myname
  // }

  showname() {
    this.myname="trần văn còi"
  }
}
