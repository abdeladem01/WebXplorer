import { Component, OnInit } from '@angular/core';
import {trigger, state, style, animate, transition, stagger, query, keyframes} from '@angular/animations';
// s
@Component({
  selector: 'app-waiting-page',
  templateUrl: './waiting-page.component.html',
  styleUrls: ['./waiting-page.component.scss']
})
export class WaitingPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
     /* setTimeout(function(){
        var el = document.getElementById('t1');
        var h1 = document.createElement('h1');
        h1.appendChild(document.createTextNode("And because the Internet before was not as fast as today's"));
        $('h1').addClass("reveal");
      }, 500);*/

  }
  /*textAnimation = trigger('textAnimation', [
    transition('* => *', [
      query(':enter', [
        stagger(2500, [
          style({ transform: 'translateY(-100px)', opacity: '0' }),
          animate('5s', keyframes([
            style({ transform: 'translateY(-100px)', opacity: '1' }),
            style({ transform: 'translateY(0)', opacity: '1' }),
            style({ transform: 'translateY(0)', opacity: '1' }),
            style({ transform: 'translateY(100px)', opacity: '0' })
          ]))
        ])
      ], { optional: true })
    ])
  ]);*/
}
