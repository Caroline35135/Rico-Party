import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { AppGlobalService } from '../app-global.service';
import { Contribution, Event} from '../model';


@Injectable({
  providedIn: 'root'
})
export class CreationEventHttpService {

  apiPath: string;

  constructor(private router:Router, private http: HttpClient, private appGlobal: AppGlobalService) { 
    this.apiPath = this.appGlobal.backEndUrl + "event/";
  }

  findByIdEvent(id: number): Observable<Event> {
    return this.http.get<Event>(this.apiPath + id);
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
        if(event.demandes){
          for(let c of event.demandes){
            c.event.id = resp.id;
            this.http.post<Contribution>(this.appGlobal.backEndUrl+ "contribution/", c).subscribe(resp=>{});
          }
        }
        this.router.navigate(["creation-event/"])
      }
    );
  }

  save2(event: Event): Observable<Event> {
    if(event.createur && !event.createur.id) {
      event.createur = null;
    }
    if(!event.adresse) {
      event.adresse = null;
    }
    return this.http.post<Event>(this.apiPath, event);
  }







    



    

}
