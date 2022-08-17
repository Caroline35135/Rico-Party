import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AppGlobalService } from '../app-global.service';
import { User } from '../model';

@Injectable({
  providedIn: 'root'
})
export class ConnexionHttpService {
  apiPath: string;
  user: User;
  //user: User = new User(1,"lay","caroline","caroline@lay","caroline");

  constructor(private router:Router, private http: HttpClient, private appGlobal: AppGlobalService) { 
    this.apiPath = this.appGlobal.backEndUrl + "user/";
  }
 
  
  seConnecter(mail: string, password: string) {
    this.http.post<User>(this.apiPath+"connexion", {
      "mail": mail,
      "password": password
    }).subscribe(response => {
      this.user = response;
      this.router.navigate(["accueil-user"]);
        
      });
  }
}