import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-number-games',
  templateUrl: './number-games.component.html',
  styleUrls: ['./number-games.component.scss']
})
export class NumberGamesComponent implements OnInit {
  centered = false;
  disabled = false;
  unbounded = false;

  radius=300;color="rgba(5,89,124,0.89)";
  constructor() { }

  ngOnInit(): void {
  }

}
