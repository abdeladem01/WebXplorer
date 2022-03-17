import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-guest-or-connect',
  templateUrl: './guest-or-connect.component.html',
  styleUrls: ['./guest-or-connect.component.scss']
})
export class GuestOrConnectComponent implements OnInit {
  centered = false;
  disabled = false;
  unbounded = false;

  radius=300;color="rgba(5,89,124,0.89)";
  isShow=false;
  constructor() { }

  ngOnInit(): void {
  }
  guestClick(){
    if (!this.isShow){
      this.isShow=true;
    }else{
      this.isShow=false;
    }
  }
}
