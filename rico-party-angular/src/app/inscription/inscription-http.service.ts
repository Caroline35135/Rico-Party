import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { AppGlobalService } from '../app-global.service';
import { User } from '../model';

@Injectable({
  providedIn: 'root'
})
export class InscriptionHttpService {
  users: Array<User> = new Array<User>();
  apiPath: string;
  email: string;
  nom : string;
  password: string;
  constructor(private router:Router, private http: HttpClient, private appGlobal: AppGlobalService) { 
    this.apiPath = this.appGlobal.backEndUrl + "user/";
    
  }
  
   inscri(user: User): Observable<User> {
        return this.http.post<User>(this.apiPath, user);
  }

  saveUser(user: User) {
    this.http.post<User>(this.apiPath, user).subscribe(
      resp=>{
        this.router.navigate(["connexion/"])
      }
    );
  }

  }
