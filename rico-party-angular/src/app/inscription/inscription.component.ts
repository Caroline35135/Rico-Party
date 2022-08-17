import { Component, OnInit } from '@angular/core';
import { User } from '../model';
import { InscriptionHttpService } from './inscription-http.service';
@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {
   
  user:User;
 

  constructor(private Inscriptionservice: InscriptionHttpService) {}
  ngOnInit(): void {}
 
  
  // ngOnInit(): void {
  //   this.inscriptionForm = this.formBuilder.group({
  //     nom : [''],
  //     email: [''],
  //     password : ['']
     
  //   })
  // }
  public inscri(user: User) {
    if((!user.mail)&&(user.nom && user.mail && user.password && user.password==user.confirmPassword))
    return 
      
      "nom"== this.user.nom,
      "mail"== this.user.mail,
      "password"== this.user.password,

    this.Inscriptionservice.saveUsers(user);

    };

  saveUser() {
    if(this.user.password==this.user.confirmPassword){
      this.user.saveUsers(this.user)
      alert("compte créé")
    }
    else{ alert("Ce compte existe déjà!")}
  }    
}