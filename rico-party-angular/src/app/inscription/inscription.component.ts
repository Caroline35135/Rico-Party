import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {
  public InscriptionForm !: FormGroup;
  signupForm: any;

  constructor(private formBuilder : FormBuilder, private http : HttpClient) {}
  ngOnInit(): void {
    this.InscriptionForm = this.formBuilder.group({
      nom : [''],
      email: [''],
      password : ['']
     
    })
  }
  inscri(){
    this.http.post<any>()
  }

}
