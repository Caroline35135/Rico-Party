package rico.model;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Embedded;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Version;

@Entity
public class Event {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	@Column(name="date_event",nullable = false)
	private LocalDate date;
	@Column(name="heure_event",nullable = false)
	private LocalTime heure;
	@Column(length=50,nullable = false)
	private String titre;
	@Column(columnDefinition = "Text")
	private String description;
	@Column(name="taille_Max",columnDefinition = "int default 50")
	private int tailleMax;
	@Column(name="accompagnant_Max",columnDefinition = "int default 0")
	private int accompagnantMax;
	@Column(columnDefinition = "double default 0")
	private double prix;
	@Column(length=5,nullable = false)
	private String password;
	@ManyToOne
	@JoinColumn(name="id_createur",nullable = false)
	private User createur;
	@OneToMany(mappedBy = "event" )
	
	private List <Message> messages=new ArrayList();
	@OneToMany(mappedBy = "event")
	private List <Participation> participants=new ArrayList();
	@Embedded
	private Adresse adresse;
	
	
	@OneToMany(mappedBy = "event")
	private List <Contribution> demandes;
	
	
	@Version
	private int version;
	
	
	
	public Event (Integer id, LocalDate date,LocalTime heure,String titre,String description,int tailleMax,int accompagnantMax,double prix,String password,User createur,List<Message> messages,List<Contribution> demandes,List<Participation> participants,Adresse adresse){
		this.id=id;
		this.date=date;
		this.heure=heure;
		this.titre=titre;
		this.description=description;
		this.tailleMax=tailleMax;
		this.accompagnantMax=accompagnantMax;
		this.prix=prix;
		this.password=password;
		this.createur=createur;
		this.messages=messages;
		this.demandes=demandes;
		this.participants=participants;
		this.adresse=adresse;
	}
	
	
	public Event() {
		
	}
	
	

	public Event(LocalDate date, LocalTime heure, String titre, String description, int tailleMax, int accompagnantMax,
			double prix, String password, User createur, List<Contribution> demandes, Adresse adresse) {
		this.date = date;
		this.heure = heure;
		this.titre = titre;
		this.description = description;
		this.tailleMax = tailleMax;
		this.accompagnantMax = accompagnantMax;
		this.prix = prix;
		this.password = password;
		this.createur = createur;
		this.demandes = demandes;
		this.adresse = adresse;
	}




	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public LocalDate getDate() {
		return date;
	}

	public void setDate(LocalDate date) {
		this.date = date;
	}

	public LocalTime getHeure() {
		return heure;
	}

	public void setHeure(LocalTime heure) {
		this.heure = heure;
	}

	public String getTitre() {
		return titre;
	}

	public void setTitre(String titre) {
		this.titre = titre;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public int getTailleMax() {
		return tailleMax;
	}

	public void setTailleMax(int tailleMax) {
		this.tailleMax = tailleMax;
	}

	public int getAccompagnantMax() {
		return accompagnantMax;
	}

	public void setAccompagnantMax(int accompagnantMax) {
		this.accompagnantMax = accompagnantMax;
	}

	public double getPrix() {
		return prix;
	}

	public void setPrix(double prix) {
		this.prix = prix;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public User getCreateur() {
		return createur;
	}

	public void setCreateur(User createur) {
		this.createur = createur;
	}

	public List<Message> getMessages() {
		return messages;
	}

	public void setMessages(List<Message> messages) {
		this.messages = messages;
	}

	public List<Contribution> getDemandes() {
		return demandes;
	}

	public void setDemandes(List<Contribution> demandes) {
		this.demandes = demandes;
	}

	public List<Participation> getParticipants() {
		return participants;
	}

	public void setParticipants(List<Participation> participants) {
		this.participants = participants;
	}

	public Adresse getAdresse() {
		return adresse;
	}

	public void setAdresse(Adresse adresse) {
		this.adresse = adresse;
	}

	
	public int getVersion() {
		return version;
	}


	public void setVersion(int version) {
		this.version = version;
	}


	@Override
	public String toString() {
		return "Event [id=" + id + ", date=" + date + ", heure=" + heure + ", titre=" + titre + ", description="
				+ description + ", tailleMax=" + tailleMax + ", accompagnantMax=" + accompagnantMax + ", prix=" + prix
				+ ", password=" + password + ", createur=" + createur + ", message=" + messages + ", demandes="
				+ demandes + ", participants=" + participants + ", adresse=" + adresse + "]";
	}

}
