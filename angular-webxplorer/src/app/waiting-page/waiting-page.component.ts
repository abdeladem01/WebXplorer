import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {trigger, style, animate, transition, stagger, query, keyframes} from '@angular/animations';
import {PlayService} from "../play.service";
// s
@Component({
  selector: 'app-waiting-page',
  templateUrl: './waiting-page.component.html',
  styleUrls: ['./waiting-page.component.scss'],
  animations: [
    trigger('listAnimation', [
      transition('* => *', [
        query(':enter', style({ opacity: 0}), {optional: true}),
        query(':enter', stagger('550ms', [
          animate('3s ease-in', keyframes([
            style({opacity: 0, transform: 'translateT(-75px)', offset:0}),
            style({opacity: .5, transform: 'translateT(55px)', offset:0.3}),
            style({opacity: 1, transform: 'translateT(75px)', offset:1}),
          ]))
        ]))
      ])
    ])
  ]
})
export class WaitingPageComponent implements OnInit {
  items : string[] = [];
  constructor(private router: Router, private playService: PlayService) {
    if (playService.getGuestName()==""){this.router.navigate(['/home']);}
    this.playService.getScreensAPI();
    this.items = ['And because the Internet before was not as fast as today\'s','We invite you to go back to the good old habits','by waiting for the loading of the game'];
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.router.navigate(['/playing']);
    }, 10000);
  }

}
