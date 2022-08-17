import { Component, OnInit } from '@angular/core';
import { User } from '../model';
import { ConnexionHttpService } from './connexion-http.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {
  mail : string;
  password : string;
  user : User;
  constructor(private Connexionservice: ConnexionHttpService) { }

  ngOnInit(): void {
  }

  connexion(){
    this.Connexionservice.seConnecter(this.mail, this.password);
  }

}
