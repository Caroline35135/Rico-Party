import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { AppGlobalService } from '../app-global.service';
import { Adresse, Contribution, Event, Message, Participation} from '../model';

@Injectable({
  providedIn: 'root'
})
export class CreationEventHttpService {

  apiPath: string;

  constructor(private http: HttpClient, private appGlobal: AppGlobalService) { 
    this.apiPath = this.appGlobal.backEndUrl + "creation-event/";
  }

  


  save(event: Event, adresse:Adresse) {

    if(event.adresse) {
      this.http.post<Adresse>(this.apiPath, adresse)
      .subscribe(resp => {
      });
    }
    this.http.post<Event>(this.apiPath, event)
        .subscribe(resp => {
        });
    }



    

}
