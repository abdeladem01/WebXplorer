import { Component, OnInit } from '@angular/core';
import {ThemePalette} from '@angular/material/core';

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
  difficulty=1;
  //Checkbox variables
  task: Task = {
    name: 'ALL CATEGORIES',
    completed: false,
    color: 'primary',
    subtasks: [
      {name: 'Social Media', completed: false, color: 'accent'},
      {name: 'Sports', completed: false, color: 'accent'},
      {name: 'News', completed: false, color: 'accent'},
      {name: 'INSA Websites', completed: false, color: 'accent'},
    ],
  };

  allComplete: boolean = false;



  constructor() { }

  ngOnInit(): void {
  }
  //Phase 2
  next(i: number){
    this.NbRounds=i;
    this.selected+=1;
  }
  //Phase 3
  end(i : number){
    this.difficulty=i;
    console.log(this.difficulty);
  }

  //Checkbox utility
  updateAllComplete() {
    this.allComplete = this.task.subtasks != null && this.task.subtasks.every(t => t.completed);
  }

  someComplete(): boolean {
    if (this.task.subtasks == null) {
      return false;
    }
    return this.task.subtasks.filter(t => t.completed).length > 0 && !this.allComplete;
  }

  setAll(completed: boolean) {
    this.allComplete = completed;
    if (this.task.subtasks == null) {
      return;
    }
    this.task.subtasks.forEach(t => (t.completed = completed));
  }

}
