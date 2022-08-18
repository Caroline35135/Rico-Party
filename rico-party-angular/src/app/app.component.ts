import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NavigationEnd, Router, Event as NavigationEvent } from '@angular/router';
import { ConnexionHttpService } from './connexion/connexion-http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})
export class AppComponent {
  title = 'rico-party';
    seConnecter : boolean= false;
    deconnexion : boolean = false;
    retour : boolean = false;
    creerCompte: boolean = false;
    isConnected: boolean = false;

    public online =navigator.onLine;
 


  constructor(private router: Router, private connexionservice:ConnexionHttpService) {}

  goBack(): void {
    window.history.back();
  }

  reinitUser(){
    this.connexionservice.user=null;
  }
 
  ngOnInit() {


  this.router.events.subscribe((event: NavigationEvent) => {
    if(event instanceof NavigationEnd) {
      if(event.url == "/accueil-user") {
        this.deconnexion  =true;
      }
      else if(event.url == "/creation-event"){
        this.retour  =true;
        this.creerCompte  =false;
        this.seConnecter = false;
        this.deconnexion = false;
      
      }

      else if(event.url == "/lien" || event.url == "/accueil-event" || event.url =="/reponse"){
        if(this.online)
        { this.deconnexion  =true;
          this.creerCompte  =false;
          this.seConnecter = false;
          this.retour = false;

         }
        else{
          this.creerCompte  =true;
          this.seConnecter = true;
          this.deconnexion = false;
          this.retour = false;
        }

      }
      else if(event.url == "/inscription" || event.url == "/connexion" ){
        this.creerCompte  =false;
          this.seConnecter = false;
          this.deconnexion = false;
          this.retour = false;
      }

      else {
        this.creerCompte  =true;
        this.seConnecter = true;
        this.deconnexion = false;
        this.retour = false;
      }  
    }
  });

  
}



}
