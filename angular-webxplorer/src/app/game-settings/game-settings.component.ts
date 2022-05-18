import { Component, OnInit } from '@angular/core';
import {ThemePalette} from '@angular/material/core';
import { Router } from '@angular/router';
import {PlayService} from "../play.service";

export interface Task {
  name: string;
  completed: boolean;
  color: ThemePalette;
  subtasks?: Task[];
}
@Component({
  selector: 'app-game-settings',
  templateUrl: './game-settings.component.html',
  styleUrls: ['./game-settings.component.scss']
})
export class GameSettingsComponent implements OnInit {
  tabs = ['First', 'Second', 'Third'];selected = 0;centered = false;
  disabled = false;unbounded = false;radius=300;color="rgba(5,89,124,0.89)";
  NbRounds=5;
  difficulty=1; category=4;




  constructor(private playService: PlayService,public router: Router) { }

  ngOnInit(): void {
  }
  //Phase 1
  next1(i:number){
    this.playService.setCategory(i);
    this.selected=1;


  }
  //Phase 2
  next(i: number){
    this.NbRounds=i;
    this.playService.setNbRounds(i);
    this.selected+=1;
  }
  //Phase 3
  end(i : number){
    this.difficulty=i;
    this.playService.setDifficulty(i);
    this.router.navigate(['/waitingpage']);
  }


}
