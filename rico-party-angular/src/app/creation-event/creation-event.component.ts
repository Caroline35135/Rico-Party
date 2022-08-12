import { Component, OnInit } from '@angular/core';
import { ConnexionHttpService } from '../connexion/connexion-http.service';
import { Event, User } from '../model';
import { CreationEventHttpService } from './creation-event-http.service';

@Component({
  selector: 'app-creation-event',
  templateUrl: './creation-event.component.html',
  styleUrls: ['./creation-event.component.css']
})
export class CreationEventComponent implements OnInit {

  event:Event;
  createur:User;

  constructor(private creationeventservice : CreationEventHttpService, private createurservice:ConnexionHttpService) { }

  ngOnInit(): void {
  }

  affcreateur(): User {
    return this.createur;
  }

  add() {
    this.event = new Event();
    this.event.createur = new User();
    this.recupcreateur();
  }

  edit(id: number) {
    this.creationeventservice.findById(id).subscribe(resp => {
      this.event = resp;
      if(!this.event.createur) {
        this.event.createur = new User();
      }
    });   
    this.recupcreateur();
  }

  save() {
    this.creationeventservice.save(this.event);
    this.cancel();
  }

  cancel() {
    this.event = null;
  }

  recupcreateur() {
/*     this.createurservice.findById(id).subscribe( 
      resp => {
        this.createur = resp;
      } 
    )*/
  }

}
