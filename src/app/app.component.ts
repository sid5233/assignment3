import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'assignment3';
  showPara = false;
  clickLog = [];
  numOfClicks = 0;
  showParagraph(){
    this.showPara = true;
    this.numOfClicks++;
    this.clickLog.push(this.numOfClicks);
    console.log(this.clickLog);
    
  }
}
