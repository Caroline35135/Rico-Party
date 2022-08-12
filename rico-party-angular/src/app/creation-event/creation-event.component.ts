import { Component, OnInit } from '@angular/core';
import { ConnexionHttpService } from '../connexion/connexion-http.service';
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

  constructor(private creationeventservice : CreationEventHttpService, private createurservice:ConnexionHttpService) { }

  ngOnInit(): void {
  }

  add() {
    this.event = new Event();
    this.adresse=new Adresse();
    this.event.createur = this.recupcreateur();
  }

  save() {
    this.creationeventservice.save(this.event, this.adresse);
    this.cancel();
  }

  cancel() {
    this.event = null;
  }

  recupcreateur():User {
    return this.createurservice.user;
  }

}
