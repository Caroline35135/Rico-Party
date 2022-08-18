import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Event, Contribution } from '../model';
import { AppGlobalService } from '../app-global.service';
import { Observable } from 'rxjs/internal/Observable';
import { ResourceLoader } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class AccueilUserHttpService {

  events: Array<Event> = new Array<Event>();
  apiPath:string;

  eventcontributions: Array<Contribution> = new Array<Contribution>();
  createurevents:Array<Event>=new Array<Event>();

  constructor(private http: HttpClient, private appGlobal: AppGlobalService) {
    this.apiPath = this.appGlobal.backEndUrl + "event/";
    //this.reload();
   }

  findAllEvents(): Array<Event> {
    return this.events;
  }

  findByIdEvent(id: number): Observable<Event> {
    return this.http.get<Event>(this.apiPath + id);
  }

  findDetailById(id: number): Observable<Event> {
    return this.http.get<Event>(this.apiPath + id+"/detail");
  }

  saveEvent(event: Event) {

    if(event.createur && !event.createur.id) {
      event.createur = null;
    }
    if(!event.adresse) {
      event.adresse = null;
    }
    if (!event.demandes){
      event.demandes = null;
    }
    this.http.put<Event>(this.apiPath + event.id+"/detail", event).subscribe(resp => {
      if(event.demandes){
        for(let c of event.demandes){
          c.event = new Event();
          c.event.id = resp.id;
          if(c.id){
            this.http.put<Contribution>("http://localhost:8080/contribution/"+c.id, c).subscribe(resp=>{});
          }else {
            this.http.post<Contribution>("http://localhost:8080/contribution/", c).subscribe(resp=>{});
          }
        }
      }
      this.findAllEventsByIdCreateur(event.createur.id);
    });
  }

  deleteEvent(id: number, idCreateur: number) {
    this.http.delete<void>(this.apiPath+ id).subscribe(resp => {
      this.findAllEventsByIdCreateur(idCreateur);
    });
  }

  // reload() {
  //   this.http.get<Array<Event>>(this.apiPath)
  //     .subscribe(response => {
  //       this.events = response;
  //     });
  // }

  findAllEventsByIdCreateur(id: number) {
    this.http.get<Array<Event>>("http://localhost:8080/user/"+id+"/events/").subscribe(response => {
      this.createurevents=response;});
  
  }

/*   findAllContributionsByIdEvent(id: number){
    this.http.get<Array<Contribution>>(this.apiPath+id+"/contributions/")
    .subscribe(response => {
      this.eventcontributions=response;
    }); 
  } */

  

  



}
