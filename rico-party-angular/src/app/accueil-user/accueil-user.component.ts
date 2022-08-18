import { Component, OnInit } from '@angular/core';
import { AccueilUserHttpService } from './accueil-user-http.service';
import { ConnexionHttpService } from '../connexion/connexion-http.service';
import { Adresse, Event, User, Contribution } from '../model';

@Component({
  selector: 'accueil-user',
  templateUrl: './accueil-user.component.html',
  styleUrls: ['./accueil-user.component.css']
})
export class AccueilUserComponent implements OnInit {

  event:Event;
  userco:User;


  constructor(private accueiluserservice: AccueilUserHttpService, private connexionservice:ConnexionHttpService) { 
    this.userco=connexionservice.user;
    this.loadEventsByIdCreateur();
  }

  ngOnInit(): void {
  }

  list(): Array<Event> {
    return this.accueiluserservice.findAllEvents();
  }

  listCreateurEvents() : Array<Event> {
    return this.accueiluserservice.createurevents;
  }

  edit(id: number) {
    this.accueiluserservice.findDetailById(id).subscribe(resp => {
      this.event = resp;
      if(!this.event.adresse) {
        this.event.adresse = new Adresse();
      }
      if(!this.event.createur) {
        this.event.createur = new User();
      }
      if (!this.event.demandes){
        this.event.demandes=new Array<Contribution>();
      }
    });   
  }

  save() {
    this.accueiluserservice.saveEvent(this.event);
    this.cancel();
  }

  delete(id: number) {
    this.accueiluserservice.deleteEvent(id, this.userco.id);
  }

  cancel() {
    this.event = null;
  }

  loadEventsByIdCreateur(){
    this.accueiluserservice.findAllEventsByIdCreateur(this.userco.id);
  }

  addContrib(){
    this.event.demandes.push(new Contribution());
  }

  // findAllContributionsByIdEvent(id: number){
  //   return this.accueiluserservice.findAllContributionsByIdEvent(id);
  // }


  



}
