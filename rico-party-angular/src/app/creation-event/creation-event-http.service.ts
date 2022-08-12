import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { AppGlobalService } from '../app-global.service';
import { Event, Message, Participation, Contribution } from '../model';

@Injectable({
  providedIn: 'root'
})
export class CreationEventHttpService {

  apiPath: string;

  constructor(private http: HttpClient, private appGlobal: AppGlobalService) { 
    this.apiPath = this.appGlobal.backEndUrl + "creation-event/";
  }

  findById(id: number): Observable<Event> {
    return this.http.get<Event>(this.apiPath + id);
  }

  save(event: Event) {
    if(event.createur && !event.createur.id) {
      event.createur = null;
    }

    if(event.messages) {
      event.messages = new Array<Message>;
    }

    if(event.participations) {
      event.participations = new Array<Participation>;
    }

    if(event.demandes) {
      event.demandes = new Array<Contribution>;
    }

    if(event.adresse && !event.adresse.id) {
      event.adresse = null;
    }

    if(event.id) {
      this.http.put<Event>(this.apiPath + event.id, event)
        .subscribe(resp => {
        });
    } 
    
    else {
      this.http.post<Event>(this.apiPath, event)
        .subscribe(resp => {
        });
    }

  }
}
