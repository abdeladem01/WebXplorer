import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-settings',
  templateUrl: './game-settings.component.html',
  styleUrls: ['./game-settings.component.scss']
})
export class GameSettingsComponent implements OnInit {
  tabs = ['First', 'Second', 'Third'];
  selected = 0;
  centered = false;
  disabled = false;
  unbounded = false;
  radius=300;color="rgba(5,89,124,0.89)";
  NbRounds=5;
  difficulty=1;


  constructor() { }

  ngOnInit(): void {
  }

  next(i: number){
    this.NbRounds=i;
    this.selected+=1;
  }
  end(i : number){
    this.difficulty=i;
    console.log(this.difficulty);
  }

}
