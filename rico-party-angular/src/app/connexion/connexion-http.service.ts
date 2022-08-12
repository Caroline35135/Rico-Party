import { Injectable } from '@angular/core';
import { User } from '../model';

@Injectable({
  providedIn: 'root'
})
export class ConnexionHttpService {

  user: User = new User(1,"lay","caroline","caroline@lay","caroline");

  constructor() { }
}
