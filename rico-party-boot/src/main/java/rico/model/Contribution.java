package rico.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Version;

@Entity
public class Contribution {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	@Enumerated(EnumType.STRING)
	@Column(columnDefinition = "ENUM('Sucre', 'Sale', 'Alcool', 'Soft')")
	private Categorie categorie;
	@Column(length=100,nullable = false)
	private String description;
	
	@ManyToOne
	@JoinColumn(nullable=false)
	private Event event;
	@ManyToOne
	private Participation participation;
	
	
	@Version
	private int version;
	
	public Contribution() {}
	
	public Contribution(Integer id, Categorie categorie, String description) {
		this.id = id;
		this.categorie = categorie;
		this.description = description;
	}
	
	public Contribution( Categorie categorie, String description) {
		this.categorie = categorie;
		this.description = description;
	}


	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}


	public Categorie getCategorie() {
		return categorie;
	}
	public void setCategorie(Categorie categorie) {
		this.categorie = categorie;
	}


	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}

	public Event getEvent() {
		return event;
	}

	public Participation getParticipation() {
		return participation;
	}

	public void setEvent(Event event) {
		this.event = event;
	}

	public void setParticipation(Participation participation) {
		this.participation = participation;
	}

	
	public int getVersion() {
		return version;
	}

	public void setVersion(int version) {
		this.version = version;
	}

	@Override
	public String toString() {
		return "Contribution [id=" + id + ", categorie=" + categorie + ", description=" + description + "]";
	}
	
	
	

}
