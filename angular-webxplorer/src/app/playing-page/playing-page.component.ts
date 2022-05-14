import { Component, OnInit } from '@angular/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
@Component({
  selector: 'app-playing-page',
  templateUrl: './playing-page.component.html',
  styleUrls: ['./playing-page.component.scss']
})
export class PlayingPageComponent implements OnInit {
  timeLeft: number = 60;
  interval:number=0;
  finished=false;
  round=1;
  constructor() { }

  ngOnInit(): void {
    this.round = 1;
  setTimeout(()=>{
    this.interval = setInterval(() => {
      if(this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        this.timeLeft = 0;
        clearInterval(this.interval);
        this.roundEnd()
      }
    },1000)
  },1000);

  }


  pauseTimer() {
    clearInterval(this.interval);
  }
  roundEnd(){
    this.finished=true;
  }
  roundEnd2(){
    this.finished=true;
    clearInterval(this.interval);
  }
  next(){
    this.round+=1;
    this.finished=false;
    this.relaunchTimer();
  }
  relaunchTimer(){
    this.timeLeft=60;
    setTimeout(()=>{
      this.interval = setInterval(() => {
        if(this.timeLeft > 0) {
          this.timeLeft--;
        } else {
          this.timeLeft = 0;
          clearInterval(this.interval);
          this.roundEnd()
        }
      },1000)
    },1000);
  }
}
