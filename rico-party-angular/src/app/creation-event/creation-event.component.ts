import { Component, OnInit } from '@angular/core';
import { ConnexionHttpService } from '../connexion/connexion-http.service';
import { EventHttpService } from '../event/event-http.service';
import { Adresse, Event, User } from '../model';
import { CreationEventHttpService } from './creation-event-http.service';

@Component({
  selector: 'app-creation-event',
  templateUrl: './creation-event.component.html',
  styleUrls: ['./creation-event.component.css']
})
export class CreationEventComponent implements OnInit {

  event:Event;
  createur:User;
  adresse:Adresse;

  constructor(private creationeventservice : CreationEventHttpService, private eventservice: EventHttpService, private connexionservice:ConnexionHttpService) { }

  ngOnInit(): void {
  }

  add() {
    this.event = new Event();
    this.event.createur = this.recupcreateur();
    this.event.adresse = new Adresse();
  }

  save() {
    this.creationeventservice.save(this.event);
    this.cancel();
  }

  cancel() {
    this.event = null;
  }

  recupcreateur():User {
    return this.connexionservice.user;
  }



}
