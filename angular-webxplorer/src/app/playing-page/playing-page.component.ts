import { Component, OnInit } from '@angular/core';
import {MatDatepicker, MatDatepickerInputEvent, MatDatepickerModule} from '@angular/material/datepicker';
import { PlayService} from "../play.service";
import {Screen} from "../../models/screen.model";
import {Router} from "@angular/router";

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
  totalScore : number = 0; scoreAct = 0; diffDate = 0; progress="0";
  trueDateDisplay:string="";
  trueDay=0; trueMon=0; trueYea=0;
  roundTotal=this.playService.getNbRounds();
  dateGuess: string = String(new Date());
  constructor(private playService: PlayService, private router: Router) {
    if (playService.getGuestName()==""){this.router.navigate(['/home']);}
    this.screensPlay = this.playService.getScreens(this.roundTotal);
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
  },2000);

  }

  roundEnd(){
    this.finished=true;
    if (this.round==this.roundTotal){
      this.textButton="Finished";
    }
  }
  roundEnd2(){
    //testing date part:
    let dateUser = new Date(this.dateGuess);
    this.calculScoreNormal(dateUser);
    // let dateUserNumber =dateUser.getFullYear()*10000+dateUser.getMonth()*100+dateUser.getDate();
    // console.log(dateUserNumber );
    this.finished=true;
    clearInterval(this.interval);
    if (this.round==this.roundTotal){
      this.textButton="Finished";
    }
  }
  next(){
    if (this.round<this.roundTotal){
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
    this.scoreAct=0;
    this.diffDate=0;
    this.progress="0";
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
    },2000);
  }
  sumScore(i:number){
    this.totalScore+=i;
  }
  calculScoreNormal(dateUser : Date){
    let trueDate= new Date(this.trueYea, this.trueMon - 1, this.trueDay);
    this.diffDate = Math.round(Math.abs(trueDate.getTime() - dateUser.getTime()) / (1000 * 60 * 60 * 24));
    this.scoreAct=Math.round(3250*this.precision(this.diffDate)*this.temps(this.timeLeft)+1750*this.precision(this.diffDate));
    this.progress=String(Math.round((this.scoreAct/5000)*100))+"%";
    this.sumScore(this.scoreAct);
    console.log(this.progress);
    console.log("Vous avez viser la vraie date à "+ this.diffDate + " jours prés.");
    console.log("Votre score est de "+this.scoreAct+" points");
  }

  //Functions de calcul score :
  precision(diff : number){
    if (diff<=20){
      return 1;
    }

    else if (diff>20 && diff<=1000){
      return 1-diff/1250;
    }

    else if (diff>1000 && diff<=2500){
      return 0.4-diff/5000;
    }

    else {
      return 0;
    }
  }
  temps(tps : number){
    if (tps<3){
      return 1;
    }
    else {
      return Math.exp(-(tps-4)/56);
    }

  }


}
