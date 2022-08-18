import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventHttpService } from '../event/event-http.service';
//import { ConnexionHttpService } from '../connexion/connexion-http.service';
import { LienHttpService } from '../lien/lien-http.service';
import {  Event, Participation, User } from '../model';

@Component({
  selector: 'app-lien',
  templateUrl: './lien.component.html',
  styleUrls: ['./lien.component.css']
})
export class LienComponent implements OnInit {

 //participation: Participation = new Participation();

 event: Event;

 password : string;

 createur:User;
  //adresse:Adresse;

  constructor(private eventService : EventHttpService, private route: ActivatedRoute, private router: Router ) { 
    this.route.params.subscribe(params => {
      let idEvent: number = params['id'];
      eventService.findById(idEvent).subscribe(resp => {
        this.event = resp;
      });
    });
  }

  ngOnInit(): void {
  }

  check() {
    if(this.password == this.event.password) {
      this.router.navigate(["accueil-event", this.event.id]);
    }
  }





}
