import { Component, OnInit } from '@angular/core';
import { User } from '../model';
import { InscriptionHttpService } from './inscription-http.service';
@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {
   
  user:User=new User();

  constructor(private Inscriptionservice: InscriptionHttpService) {}
  ngOnInit(): void {}



  saveUser() {
    if((this.user.nom && this.user.prenom && this.user.mail && this.user.password && this.user.password==this.user.confirmPassword)){
      this.Inscriptionservice.saveUser(this.user)
      alert("compte créé")
    }
    else{alert("Ce compte n'a pas pu être crée")}
  }    


}