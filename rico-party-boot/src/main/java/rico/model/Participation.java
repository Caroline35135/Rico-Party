package rico.model;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;
import javax.persistence.Version;

import com.fasterxml.jackson.annotation.JsonView;
@Entity
@Table(uniqueConstraints = @UniqueConstraint(columnNames = {"id_event","id_participant"}))
public class Participation {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@JsonView(Views.ViewCommon.class)
	private Integer id;
	
	@Column(name="nom")
	@JsonView(Views.ViewCommon.class)
	private String nom;
	
	@Column(name="prenom")
	@JsonView(Views.ViewCommon.class)
	private String prenom;
	
	@Column(name="mail")
	@JsonView(Views.ViewCommon.class)
	private String mail;
	
	@Column(name="nb_personne",columnDefinition = "int default 1")
	@JsonView(Views.ViewCommon.class)
	private int nbPersonne;
	
	@Column(name="accompagnants",columnDefinition = "VARCHAR(75)",nullable = false)
	@JsonView(Views.ViewCommon.class)
	private String invites;
	
	@ManyToOne
	@JoinColumn(name="id_participant",nullable = false)
	@JsonView(Views.ViewParticipation.class)
	private User user;
	
	@ManyToOne
	@JoinColumn(name="id_event",nullable = false)
	@JsonView(Views.ViewParticipation.class)
	private Event event;
	
	@OneToMany(mappedBy = "participation")
	@JsonView(Views.ViewParticipationDetail.class)
	private List <Contribution> contributions;
	
	@Version
	private int version;
	
	
	public Participation(Integer id, String nom, String prenom, String mail, int nbPersonne, String invites, User user, List<Contribution> contributions,
			Event event) {
		this.id = id;
		this.nom=nom;
		this.prenom=prenom;
		this.mail=mail;
		this.nbPersonne = nbPersonne;
		this.invites = invites;
		this.user = user;
		this.contributions = contributions;
		this.event = event;
	}

	public Participation() {
		
	}
	
	public Participation(int nbPersonne, String invites, User user, List<Contribution> contributions,Event event) {
		this.nbPersonne = nbPersonne;
		this.invites = invites;
		this.user = user;
		this.contributions = contributions;
		this.event = event;
	}


	public Integer getId() {
		return id;
	}


	public void setId(Integer id) {
		this.id = id;
	}

	public int getNbPersonne() {
		return nbPersonne;
	}


	public void setNbPersonne(int nbPersonne) {
		this.nbPersonne = nbPersonne;
	}

	public String getInvites() {
		return invites;
	}

	public void setInvites(String invites) {
		this.invites = invites;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}


	public List<Contribution> getContributions() {
		return contributions;
	}


	public void setContributions(List<Contribution> contributions) {
		this.contributions = contributions;
	}


	public Event getEvent() {
		return event;
	}


	public void setEvent(Event event) {
		this.event = event;
	}

	

	public int getVersion() {
		return version;
	}

	public void setVersion(int version) {
		this.version = version;
	}
	
	

	public String getNom() {
		return nom;
	}

	public void setNom(String nom) {
		this.nom = nom;
	}

	public String getPrenom() {
		return prenom;
	}

	public void setPrenom(String prenom) {
		this.prenom = prenom;
	}

	public String getMail() {
		return mail;
	}

	public void setMail(String mail) {
		this.mail = mail;
	}

	@Override
	public String toString() {
		return "Participation [id=" + id + ", nom=" + nom + ", prenom=" + prenom + ", mail=" + mail + ", nbPersonne="
				+ nbPersonne + ", invites=" + invites + ", user=" + user + ", event=" + event + ", contributions="
				+ contributions + ", version=" + version + "]";
	}
	
	



}
