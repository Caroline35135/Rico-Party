import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { AppGlobalService } from '../app-global.service';
import { Event, Adresse, Contribution } from '../model';

@Injectable({
  providedIn: 'root'
})
export class EventHttpService {

   adresses: Array<Adresse> = new Array<Adresse>();
   apiPath:string;
 
   constructor(private http: HttpClient, private appGlobal: AppGlobalService) { 
     this.apiPath = this.appGlobal.backEndUrl + "event/";
   }
   
   findAll(): Observable<Array<Event>> {
    return this.http.get<Array<Event>>(this.apiPath);
  }

   findById(id: number): Observable<Event> {
    return this.http.get<Event>(this.apiPath + id);
  }
 
   findAllAdresses(): Observable<Array<Adresse>> {
     return this.http.get<Array<Adresse>>(this.apiPath+"/adresse");
   }
 
   findAdresseByIdEvent(id: number): Observable<Adresse> {
     return this.http.get<Adresse>(this.apiPath +id+"/adresse");
   }

   findContribsByIdEvent(id: number): Observable<Array<Contribution>> {
    return this.http.get<Array<Contribution>>(this.apiPath +id+"/contribution");
  }

}
