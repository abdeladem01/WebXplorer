import { Injectable } from '@angular/core';
import { SCREEN_LIST} from "../mocks/screens";
import {Screen} from "../models/screen.model";
import {HttpClient, HttpParams} from "@angular/common/http";
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PlayService {
  getScreenz(): any {return this._screens;}
  setScreenz(value: any) {this._screens = value;}

  private _screens: any =[];
  private _guestName="";
  private _category=4;
  private _nbRounds=5;
  private _difficulty=1;
  private _predefinedMode=false;
  private _scoreTotal = 0 ;
  getUrl='http://localhost:3000/site';
  recupSite : any = null;
  constructor(private http: HttpClient) { }
  getScreens(i:number) : Screen[]{ //API MIEUX
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
  getScoreTotal(): number {return this._scoreTotal;}
  setScoreTotal(value: number) {this._scoreTotal = value;}
  getScreensAPI(){
    let queryParams = new HttpParams();
    queryParams = queryParams.append("nb",this._nbRounds);
    queryParams = queryParams.append("category",this._category);
    this.http.get(this.getUrl,{params:queryParams}).subscribe(
      (result) => {
        this._screens = result;
        // console.log(this._screens);
      });
    return this._screens;
  }
}
