import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReponseHttpService } from './reponse-http.service';
import { Event, Participation } from '../model';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-reponse',
  templateUrl: './reponse.component.html',
  styleUrls: ['./reponse.component.css']
})
export class ReponseComponent implements OnInit {

 
  event :Event;
  participation: Participation;
 liste: Array<number> = new Array<number>();
 participations: Array<Participation> = new Array<Participation>();
  
  oui: boolean = false;
  non: boolean = false;

  constructor(private reponseService: ReponseHttpService,private route: ActivatedRoute) { }

  ngOnInit() {
    this.participation = new Participation();
    this.participation.event = new Event();
    this.participation.event.id = Number(this.route.snapshot.paramMap.get('id'));
   
    this.getEvent();
    
   
   
   
  }

  estNon(){
    this.non=true;
    this.oui=false;
  }

  estOui(){
    this.oui=true;
    this.non = false;
  }

  getEvent() {
    let id = Number(this.route.snapshot.paramMap.get('id'));
    console.log(id);
    this.reponseService.findById(id).subscribe(resp => {
      this.event = resp;
      for( let i = 0; i <= this.event.accompagnantMax; i++){
        this.liste.push(i);   
      }
    });  
    
}

listeDeroulante(){
  return this.liste;
}


save() {
  if (this.participation.nbPersonne==null){
    this.participation.jeParticipe= "non";
  }
  else{this.participation.jeParticipe= "oui";}
this.reponseService.save(this.participation)

  }



  cancel(){
    window.history.back();

  }


}