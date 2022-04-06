import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-settings',
  templateUrl: './game-settings.component.html',
  styleUrls: ['./game-settings.component.scss']
})
export class GameSettingsComponent implements OnInit {
  tabs = ['First', 'Second', 'Third'];
  selected = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
