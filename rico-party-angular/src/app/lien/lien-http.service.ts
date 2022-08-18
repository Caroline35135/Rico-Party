import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AppGlobalService } from '../app-global.service';
import {  Adresse, Contribution, Event, Message, Participation} from '../model';

@Injectable({
  providedIn: 'root'
})
export class LienHttpService {

  apiPath: string;

  constructor(private router:Router, private http: HttpClient, private appGlobal: AppGlobalService) { 
    this.apiPath = this.appGlobal.backEndUrl + "participation/";
  }

  save() {

   /* this.http.post<Participation>(this.apiPath, participation).subscribe(
      resp=>{
        this.router.navigate(["accueil-event", participation.event.id])
      }
    );*/
    this.router.navigate(["accueil-event"]);
  }
    
}
