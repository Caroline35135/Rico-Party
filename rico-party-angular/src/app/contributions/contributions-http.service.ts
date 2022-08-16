import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { AppGlobalService } from '../app-global.service';
import { Contribution } from '../model';

@Injectable({
  providedIn: 'root'
})
export class ContributionsHttpService {

  contributions: Array<Contribution> = new Array<Contribution>();

  apiPath:string;

  constructor(private http: HttpClient, private appGlobal: AppGlobalService) { 
    this.apiPath = this.appGlobal.backEndUrl + "contribution/";
    this.reload();
  }

  findAll(): Array<Contribution> {
    return this.contributions;
  }



  findById(id: number): Observable<Contribution> {
    return this.http.get<Contribution>(this.apiPath + id);
  }

  save(contribution: Contribution) {

    if(contribution.event && !contribution.event.id) {
      contribution.event = null;
    }

    if(contribution.participation && !contribution.participation.id) {
      contribution.participation = null;
    }

    if(contribution.id) {
      this.http.put<Contribution>(this.apiPath + contribution.id, contribution)
        .subscribe(resp => {
          this.reload();
      });
    }
  }

  delete(id: number) {
    this.http.delete<void>(this.apiPath+ id)
      .subscribe(resp => {
        this.reload();
      });
  }

  reload() {
    this.http.get<Array<Contribution>>(this.apiPath)
      .subscribe(response => {
        this.contributions = response;
      });
  }
}
