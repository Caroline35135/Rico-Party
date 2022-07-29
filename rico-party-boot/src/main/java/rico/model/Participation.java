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
@Entity
@Table(uniqueConstraints = @UniqueConstraint(columnNames = {"id_event","id_participant"}))
public class Participation {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	@Column(name="nb_personne",columnDefinition = "int default 1")
	private int nbPersonne;
	@Column(name="accompagnants",columnDefinition = "VARCHAR(75)",nullable = false)
	private String invites;
	@ManyToOne
	@JoinColumn(name="id_participant",nullable = false)
	private User user;
	
	@ManyToOne
	@JoinColumn(name="id_event",nullable = false)
	private Event event;
	
	@OneToMany(mappedBy = "participation")
	private List <Contribution> contributions;
	
	@Version
	private int version;
	
	
	public Participation(Integer id, int nbPersonne, String invites, User user, List<Contribution> contributions,
			Event event) {
		this.id = id;
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

	@Override
	public String toString() {
		return "Participation [id=" + id + ", nbPersonne=" + nbPersonne + ", invites=" + invites + ", user=" + user
				+ "]";
	}
	

}
