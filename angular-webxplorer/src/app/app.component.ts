import {Component, OnInit} from '@angular/core';
import {PlayService} from "./play.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'WebXploRer';
  showFiller = false;
  constructor(private playService: PlayService)  {
    playService.setGuestName("");
  }
  ngOnInit() {
    this.playService.setGuestName("");
  }
}
