import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { AppGlobalService } from '../app-global.service';
import { Event, Participation} from '../model';

@Injectable({
  providedIn: 'root'
})
export class ReponseHttpService {

  events: Array<Event> = new Array<Event>();
  apiPath: string;
  apiPathParticipation: string;
  constructor(private http: HttpClient, private appGlobal: AppGlobalService, private router:Router, ) {
    this.apiPath = this.appGlobal.backEndUrl + "event/";
    this.apiPathParticipation = this.appGlobal.backEndUrl + "participation/";
    this.reload();
   }


   findById(id: number): Observable<Event> {
    return this.http.get<Event>(this.apiPath + id);
  }

  reload() {
    this.http.get<Array<Event>>(this.apiPath)
      .subscribe(response => {
        this.events = response;
      });
  }

  save(participation: Participation) {
   
    this.http.post<Participation>(this.apiPath, participation).subscribe(
      resp=>{
        this.router.navigate(["connexion/"])
      }
    );
  }

}