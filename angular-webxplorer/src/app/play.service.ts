import { Injectable } from '@angular/core';
import { SCREEN_LIST} from "../mocks/screens";
import {Screen} from "../models/screen.model";

@Injectable({
  providedIn: 'root'
})
export class PlayService {


  private _guestName="";
  private _category=4;
  private _nbRounds=5;
  private _difficulty=1;
  private _predefinedMode=false;
  constructor() { }
  getScreens(i:number) : Screen[]{
    let list = SCREEN_LIST;
    const shuffled = list.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, i);
  }
  getGuestName(): string {return this._guestName;}
  setGuestName(value: string) {this._guestName = value;}
  getCategory(): number {return this._category;}
  setCategory(value: number) {this._category = value;}
  getNbRounds(): number {return this._nbRounds;}
  setNbRounds(value: number) {this._nbRounds = value;}
  getDifficulty(): number {return this._difficulty;}
  setDifficulty(value: number) {this._difficulty = value;}
  getPredefinedMode(): boolean {return this._predefinedMode;}
  setPredefinedMode(value: boolean) {this._predefinedMode = value;}
}