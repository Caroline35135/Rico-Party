import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/internal/Subscription';
import { ConnexionHttpService } from '../connexion/connexion-http.service';
import { Adresse, Event, User } from '../model';
import { AccueilEventHttpService } from './accueil-event-http.service';

@Component({
  selector: 'app-accueil-event',
  templateUrl: './accueil-event.component.html',
  styleUrls: ['./accueil-event.component.css']
})
export class AccueilEventComponent implements OnInit {

  event: Event;
  createur:User;
  estCreateur: boolean= true;

  
  private routeSub: Subscription;
  constructor(private accueilEventService: AccueilEventHttpService,private route: ActivatedRoute , private connexionservice:ConnexionHttpService) {
  }

  ngOnInit()  {
    
  
    this.getEvent();
   if(this.recupcreateur().id=this.createur.id){
      this.estCreateur= true;
   }
    

  }

  list(): Array<Event> {
    return this.accueilEventService.findAll();
  }

  getEvent(){
    let id = Number(this.route.snapshot.paramMap.get('id'));
    this.accueilEventService.findById(id).subscribe(resp => {
      this.event = resp;
    });
  

  }


recupcreateur():User {
  return this.connexionservice.user;
}

}
