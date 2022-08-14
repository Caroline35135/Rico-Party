import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppGlobalService } from '../app-global.service';
import { Adresse, Contribution, Event, Message, Participation} from '../model';

@Injectable({
  providedIn: 'root'
})
export class CreationEventHttpService {

  apiPath: string;

  constructor(private http: HttpClient, private appGlobal: AppGlobalService) { 
    this.apiPath = this.appGlobal.backEndUrl + "event/";
  }

  save(event: Event) {
    this.http.post<Event>(this.apiPath, event);
  }
    



    

}
