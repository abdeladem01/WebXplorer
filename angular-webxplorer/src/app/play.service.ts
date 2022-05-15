import { Injectable } from '@angular/core';
import { SCREEN_LIST} from "../mocks/screens";
import {Screen} from "../models/screen.model";

@Injectable({
  providedIn: 'root'
})
export class PlayService {

  constructor() { }
  getScreens(i:number) : Screen[]{
    let list = SCREEN_LIST;
    const shuffled = list.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, i);
  }
}
