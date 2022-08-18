import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppGlobalService } from '../app-global.service';
import { ConnexionHttpService } from '../connexion/connexion-http.service';
import { EventHttpService } from '../event/event-http.service';
import { Adresse, Contribution, Event, User } from '../model';
import { CreationEventHttpService } from './creation-event-http.service';

@Component({
  selector: 'creation-event',
  templateUrl: './creation-event.component.html',
  styleUrls: ['./creation-event.component.css']
})
export class CreationEventComponent implements OnInit {

  event:Event;
  eventcree:boolean=false;
  lien:string;
  idEvent: number;

  constructor(private creationeventservice : CreationEventHttpService, private eventservice: EventHttpService, private connexionservice:ConnexionHttpService,private router:Router, private http: HttpClient, private appGlobal: AppGlobalService) {
    if(connexionservice.user){
      this.event = new Event();
      this.event.createur = this.recupcreateur();
      this.event.adresse = new Adresse();
      this.event.demandes= new Array<Contribution>();
    }
    else {
      this.router.navigate(["connexion/"]);
    }
  }

  ngOnInit(): void {
  }

  save() {
    this.creationeventservice.save(this.event);
    this.cancel();
  }

  save2(event: Event) {
    this.creationeventservice.save2(event).subscribe(resp=>{
        if(event.demandes){
          for(let c of event.demandes){
            c.event = new Event();
            c.event.id = resp.id;
            this.http.post<Contribution>("http://localhost:8080/contribution/", c).subscribe(resp=>{});
          }
        }
        this.idEvent= resp.id;
        this.cancel();
        this.router.navigate(["creation-event/"]);
    });
  }

  cancel() {
    this.lien="http://localhost:4200/accueil-event/"+this.idEvent;
    this.eventcree=true;
  }

  recupcreateur():User {
    return this.connexionservice.user;
  }

  addContrib(){
      this.event.demandes.push(new Contribution());
  }
}
