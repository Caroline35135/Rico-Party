import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AppGlobalService } from '../app-global.service';
import { Adresse, Contribution, Event, Message, Participation} from '../model';

@Injectable({
  providedIn: 'root'
})
export class CreationEventHttpService {

  apiPath: string;

  constructor(private router:Router, private http: HttpClient, private appGlobal: AppGlobalService) { 
    this.apiPath = this.appGlobal.backEndUrl + "event/";
  }

  save(event: Event) {

    if(event.createur && !event.createur.id) {
      event.createur = null;
    }
    if(!event.adresse) {
      event.adresse = null;
    }

    this.http.post<Event>(this.apiPath, event).subscribe(
      resp=>{
        this.router.navigate(["accueil-user/"])
      }
    );
  }
    



    

}
