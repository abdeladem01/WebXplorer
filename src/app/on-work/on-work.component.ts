import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-on-work',
  templateUrl: './on-work.component.html',
  styleUrls: ['./on-work.component.scss']
})
export class OnWorkComponent implements OnInit {
centered = false;
  disabled = false;unbounded = false;radius=300;color="rgba(5,89,124,0.89)";
  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  goHome(){
    this.router.navigate(['/home']);
  }
}
