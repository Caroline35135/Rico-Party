
import { Component, OnInit } from '@angular/core';

import { ContributionsHttpService } from './contributions-http.service';

import { Contribution, Event, Participation } from '../model';

@Component({
  selector: 'contributions',
  templateUrl: './contributions.component.html',
  styleUrls: ['./contributions.component.css']
})
export class ContributionsComponent implements OnInit {

  contributions: Array<Contribution> ;
  contribution: Contribution ;

  constructor(private contributionsservice: ContributionsHttpService) { }


  list(): Array<Contribution> {
    return this.contributionsservice.findAll();
  }

  edit(id: number) {
    this.contributionsservice.findById(id).subscribe(resp => {
      this.contribution = resp;
      if(!this.contribution.event) {
        this.contribution.event = new Event();
      }
      if(!this.contribution.participation) {
        this.contribution.participation = new Participation();
      }
    });   
  }

  save() {
    this.contributionsservice.save(this.contribution);
    this.cancel();
  }

  delete(id: number) {
    this.contributionsservice.delete(id);
  }

  cancel() {
    this.contribution = null;
  }

  ngOnInit(): void {
  }

}
