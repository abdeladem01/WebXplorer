import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {PlayService} from "../play.service";

@Component({
  selector: 'app-guest-or-connect',
  templateUrl: './guest-or-connect.component.html',
  styleUrls: ['./guest-or-connect.component.scss']
})
export class GuestOrConnectComponent implements OnInit {
  centered = false;disabled = false;unbounded = false;
  radius=300;color="rgba(198,155,215,0.61)";
  isShow=false;

  user!: string;
  constructor(private playService: PlayService,private router: Router) {
    var user=this.user;
    //[routerLink]="user?['/gamesettings']:['/playas']"
  }

  ngOnInit(): void {
  }
  guestClick(){
    if (!this.isShow){
      this.isShow=true;
    }else{
      this.isShow=false;
    }
  }
  next(){
    if (this.user){
      this.playService.setGuestName(this.user);
      this.router.navigate(['/gamesettings']);
    }
  }
}
