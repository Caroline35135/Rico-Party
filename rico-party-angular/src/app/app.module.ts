import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AccueilPrincipalComponent } from './accueil-principal/accueil-principal.component';
import { AccueilPrincipalHttpService } from './accueil-principal/accueil-principal-http.service';
import { ConnexionComponent } from './connexion/connexion.component';
import { ConnexionHttpService } from './connexion/connexion-http.service';
import { InscriptionComponent } from './inscription/inscription.component';
import { InscriptionHttpService } from './inscription/inscription-http.service';
import { AccueilUserComponent } from './accueil-user/accueil-user.component';
import { AccueilUserHttpService } from './accueil-user/accueil-user-http.service';
import { CreationEventComponent } from './creation-event/creation-event.component';
import { CreationEventHttpService } from './creation-event/creation-event-http.service';
import { ContributionsComponent } from './contributions/contributions.component';
import { ContributionsHttpService } from './contributions/contributions-http.service';
import { LienComponent } from './lien/lien.component';
import { LienHttpService } from './lien/lien-http.service';
import { AccueilEventComponent } from './accueil-event/accueil-event.component';
import { AccueilEventHttpService } from './accueil-event/accueil-event-http.service';
import { ReponseComponent } from './reponse/reponse.component';
import { ReponseHttpService } from './reponse/reponse-http.service';
import { EventComponent } from './event/event.component';
import { EventHttpService } from './event/event-http.service';

@NgModule({
  declarations: [
    AppComponent,
    AccueilPrincipalComponent,
    ConnexionComponent,
    InscriptionComponent,
    AccueilUserComponent,
    CreationEventComponent,
    ContributionsComponent,
    LienComponent,
    AccueilEventComponent,
    ReponseComponent,
    EventComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AccueilPrincipalHttpService,ConnexionHttpService,InscriptionHttpService,AccueilUserHttpService,CreationEventHttpService,ContributionsHttpService,LienHttpService,AccueilEventHttpService,ReponseHttpService,EventHttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
