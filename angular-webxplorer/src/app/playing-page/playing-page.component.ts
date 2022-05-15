import { Component, OnInit } from '@angular/core';
import {MatDatepicker, MatDatepickerInputEvent, MatDatepickerModule} from '@angular/material/datepicker';
import { PlayService} from "../play.service";
import {Screen} from "../../models/screen.model";

@Component({
  selector: 'app-playing-page',
  templateUrl: './playing-page.component.html',
  styleUrls: ['./playing-page.component.scss']
})
export class PlayingPageComponent implements OnInit {
  timeLeft: number = 60;interval:number=0;finished=false;
  round=1;
  screensPlay : Screen[];screen : Screen ;
  textButton = "Next Round";
  totalScore : number = 0;
  trueDate : Date | undefined ;
  trueDateDisplay:string="";
  trueDay=0; trueMon=0; trueYea=0;
  constructor(private playService: PlayService) {
    this.screensPlay = this.playService.getScreens(5);
    this.screen = this.screensPlay[this.round-1];
    this.trueYea= Math.floor(this.screen.date/10000);
    this.trueMon=Math.floor(this.screen.date/100)-(this.trueYea*100);
    this.trueDay=this.screen.date-this.trueMon*100-this.trueYea*10000;
    this.trueDateDisplay=String(this.trueDay)+"/"+String(this.trueMon)+"/"+String(this.trueYea);
  }

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

  roundEnd(){
    this.finished=true;
    if (this.round==5){
      this.textButton="Finished";
    }
  }
  roundEnd2(){
    this.finished=true;
    clearInterval(this.interval);
    if (this.round==5){
      this.textButton="Finished";
    }
  }
  next(){
    if (this.round<5){
      this.round+=1;
      this.finished=false;
      this.screen = this.screensPlay[this.round-1];
      this.trueYea= Math.floor(this.screen.date/10000);
      this.trueMon=Math.floor(this.screen.date/100)-(this.trueYea*100);
      this.trueDay=this.screen.date-this.trueMon*100-this.trueYea*10000;
      this.trueDateDisplay=String(this.trueDay)+"/"+String(this.trueMon)+"/"+String(this.trueYea);
      this.relaunchTimer();
    }
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
  sumScore(i:number){
    this.totalScore+=i;
  }
}
