import { Component, OnInit } from '@angular/core';
import {PlayService} from "../play.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-end-page',
  templateUrl: './end-page.component.html',
  styleUrls: ['./end-page.component.scss']
})
export class EndPageComponent implements OnInit {
  totalScore=0;NbRounds=5;pointsTotal=25000;progress="0";text="";text2="";
  username="";difficulty=1;
  //for buttons :
  centered = false;
  disabled = false;unbounded = false;radius=300;color="rgba(5,89,124,0.89)";
  constructor(private playService: PlayService, private router: Router) {
    if (playService.getGuestName()==""){this.router.navigate(['/home']);}
    this.username=playService.getGuestName();
    this.difficulty=playService.getDifficulty();
    this.totalScore=playService.getScoreTotal();
    this.NbRounds=playService.getNbRounds();
    this.pointsTotal=5000*this.NbRounds;
    this.progress=String(Math.round((this.totalScore/this.pointsTotal)*100))+"%";

  }

  ngOnInit(): void {
    if (Math.round((this.totalScore/this.pointsTotal)*100)<30){
      this.text="A Craaazy awful game actually";
      this.text2="Noob";
    }else if (Math.round((this.totalScore/this.pointsTotal)*100)<65){
      this.text="It's Craaazy how MID it was";
      this.text2="Normie";
    } else{
      this.text="Are you Tim Berners-Lee???";
      this.text2="Lord";
    }
  }

}
