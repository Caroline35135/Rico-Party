import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/internal/Subscription';
import { Adresse, Event } from '../model';
import { AccueilEventHttpService } from './accueil-event-http.service';

@Component({
  selector: 'app-accueil-event',
  templateUrl: './accueil-event.component.html',
  styleUrls: ['./accueil-event.component.css']
})
export class AccueilEventComponent implements OnInit {

  event: Event;

  private routeSub: Subscription;
  constructor(private accueilEventService: AccueilEventHttpService,private route: ActivatedRoute) {
  }

  ngOnInit()  {
    
  
    this.getEvent();
    

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
callBack(){
  
}

}
