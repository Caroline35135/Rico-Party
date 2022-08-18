import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilEventComponent } from './accueil-event/accueil-event.component';
import { AccueilPrincipalComponent } from './accueil-principal/accueil-principal.component';
import { AccueilUserComponent } from './accueil-user/accueil-user.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { ContributionsComponent } from './contributions/contributions.component';
import { CreationEventComponent } from './creation-event/creation-event.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { LienComponent } from './lien/lien.component';
import { ReponseComponent } from './reponse/reponse.component';

const routes: Routes = [
  {path:"", component: AccueilPrincipalComponent,pathMatch: 'full' },
  {path:"accueil-event", component: AccueilEventComponent},
  {path:"accueil-event/:id", component: AccueilEventComponent},
  {path:"accueil-user", component: AccueilUserComponent},
  {path:"connexion", component: ConnexionComponent},
  {path:"contributions", component: ContributionsComponent},
  {path:"creation-event", component: CreationEventComponent},
  {path:"creation-event/:id", component: CreationEventComponent},
  {path:"inscription", component: InscriptionComponent},
  {path:"lien", component: LienComponent},
  {path:"reponse/:id", component: ReponseComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
