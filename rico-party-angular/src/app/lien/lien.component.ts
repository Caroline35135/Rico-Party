import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
//import { ConnexionHttpService } from '../connexion/connexion-http.service';
import { LienHttpService } from '../lien/lien-http.service';
import {  Event, Participation, User } from '../model';

@Component({
  selector: 'app-lien',
  templateUrl: './lien.component.html',
  styleUrls: ['./lien.component.css']
})
export class LienComponent implements OnInit {

 participation: Participation = new Participation();

 createur:User;

  constructor(private lienservice : LienHttpService, private route: ActivatedRoute /*,  private connexionservice:ConnexionHttpService*/ ) { 
    this.route.params.subscribe(params => {
      this.participation.event = new Event();
      this.participation.event.id = params['id'];
    })
  }

  ngOnInit(): void {
  }

  save() {
    this.lienservice.save(this.participation);
  }

  



}
