export abstract class Compte {
  id: number;
  nom: string;
  prenom: string;
  mail: string;
  password: string;
  version: number;

  constructor(id?: number, nom? : string, prenom?: string, mail?: string, password?: string, version?: number) {
      this.id = id;
      this.nom = nom;
      this.prenom = prenom;
      this.mail= mail;
      this.password= password;
      this.version= version;
  }
}

export class Admin extends Compte {
 

  constructor(id?: number, nom? : string, prenom?: string, mail?: string, password?: string ) {
      super(id, nom, prenom, mail, password);
      
  }
}

export class User extends Compte {
   messages: Array<Message>;
   participations: Array<Participation>;
   events: Array<Event>;
 

  constructor(id?: number, nom? : string, prenom?: string, mail?: string, password?: string, events?: Array<Event> ) {
      super(id, nom, prenom, mail, password);
      this.events= events;

      
  }
}


export class Adresse {
  numero: string;
  voie: string;
  ville: string;
  cp: string;

  constructor(numero?: string, voie?: string, ville?: string,cp?: string) {
      this.numero=numero;
      this.voie =  voie;
      this.cp =  cp;
      this.ville= ville;
  }
}

export enum Categorie {
  Sucre, Sale, Alcool, Soft

}

export class Contribution {
  id: number;
  categorie: Categorie;
  description: string;
  event: Event;
  Participation: Participation;
  version: number;

  constructor(id?: number, categorie?: Categorie, description?: string) {
    this.id = id;
    this.categorie = categorie;
    this.description = description;
}
}

export class Event{
id: number;
date: Date;
heure: Date;
titre: string;
description: string;
tailleMax: number;
accompagnantMax: number;
prix: number;
password: string;
createur: User;
messages: Array<Message>;
participations: Array<Participation>;
adresse: Adresse;
demandes: Array<Contribution>;
version: number;

constructor(id?: number , date?: Date, heure?: Date, titre?: string, description?: string, tailleMax?: number, accompagnantMax?: number, prix?: number, password?: string, createur?: User, messages?: Array<Message>, participations?: Array<Participation>, adresse?: Adresse, demandes?: Array<Contribution>) {
  this.id = id;
  this.date = date;
  this.heure= heure;
  this.titre = titre;
  this.description = description;
  this.tailleMax = tailleMax;
  this.accompagnantMax = accompagnantMax;
  this.prix = prix;
  this.password = password;
  this.createur = createur;
  this.messages = messages;
  this.participations = participations;
  this.adresse = adresse;
  this.demandes = demandes;
}


}

export class Message {

  id: number; 
  content: string;
  date: Date;
  heure: Date;
  user: User;
  event: Event;
  version: number;

  constructor(id?: number, content?: string, date?: Date, heure?: Date, user?: User, event?: Event){
    this.id = id;
    this.content= content;
    this.date = date;
    this.heure= heure;
    this. user = user;
    this.event = event;

  }

}


export class Participation{
  id: number;
  nbPersonne: number;
  invites: string;
  user: User;
  event: Event;
  contributions: Array<Contribution>;
  version: number;

  constructor(id?: number, nbPersonne?: number, invites?: string, user?: User, event?: Event, contributions?: Array<Contribution>){
      this.id = id;
      this.nbPersonne = nbPersonne;
      this. invites = invites;
      this.user = user;
      this.event = event;
      this.contributions= contributions;
  }



}
