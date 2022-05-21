import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-title-page',
  templateUrl: './title-page.component.html',
  styleUrls: ['./title-page.component.scss']
})
export class TitlePageComponent implements OnInit {
  title = 'WebXploRer';
  centered = false;
  disabled = false;
  unbounded = false;

  radius=300;color="rgba(5,89,124,0.89)";
  constructor() { }

  ngOnInit(): void {
  }

}
