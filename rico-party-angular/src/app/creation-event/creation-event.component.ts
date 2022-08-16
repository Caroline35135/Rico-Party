import { Component, OnInit } from '@angular/core';
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
  createur:User;
  adresse:Adresse;

  contribution= new Contribution();

  constructor(private creationeventservice : CreationEventHttpService, private eventservice: EventHttpService, private connexionservice:ConnexionHttpService) { }

  ngOnInit(): void {
    this.event = new Event();
    this.event.createur = this.recupcreateur();
    this.event.adresse = new Adresse();
    this.event.demandes= new Array<Contribution>();
  }


  add() {
    this.event = new Event();
    this.event.createur = this.recupcreateur();
    this.event.adresse = new Adresse();
    this.event.demandes= new Array<Contribution>();
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

  addContrib(){
      this.event.demandes.push(new Contribution());
  }


}
