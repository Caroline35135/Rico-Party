import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { AppGlobalService } from '../app-global.service';
import { Event } from '../model';

@Injectable({
  providedIn: 'root'
})
export class AccueilEventHttpService {

  events: Array<Event> = new Array<Event>();

  apiPath: string;

  constructor(private http: HttpClient, private appGlobal: AppGlobalService) {
    this.apiPath = this.appGlobal.backEndUrl + "event/";
    this.reload();
  }

  findAll(): Array<Event> {
    return this.events;
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
}
