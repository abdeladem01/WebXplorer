import { Component, OnInit } from '@angular/core';
import {ThemePalette} from '@angular/material/core';
import { Router } from '@angular/router';

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
      {name: 'Social Media', completed: true, color: 'accent'},
      {name: 'Sports', completed: true, color: 'accent'},
      {name: 'News', completed: true, color: 'accent'},
      {name: 'INSA Websites', completed: true, color: 'accent'},
    ],
  };

  allComplete: boolean = false;



  constructor(public router: Router) { }

  ngOnInit(): void {
  }
  //Phase 1
  next1(){
    let a = false;
    this.task.subtasks?.forEach(e=>a=a||e.completed==true)
    if (a){
      this.selected=1;
    }else{
      this.selected=0;
    }

  }
  //Phase 2
  next(i: number){
    this.NbRounds=i;
    this.selected+=1;
  }
  //Phase 3
  end(i : number){
    this.difficulty=i;
    this.router.navigate(['/waitingpage']);
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
