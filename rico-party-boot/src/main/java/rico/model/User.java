package rico.model;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.OneToMany;
import javax.persistence.Version;

import com.fasterxml.jackson.annotation.JsonView;
@Entity
public class User extends Compte {
	
	
	@OneToMany(mappedBy = "user")
	@JsonView(Views.ViewUser.class)
	private List <Message> messages=new ArrayList();
	@OneToMany(mappedBy = "user")
	@JsonView(Views.ViewUser.class)
	private List<Participation> participations=new ArrayList();
	@OneToMany(mappedBy = "createur")
	@JsonView(Views.ViewUser.class)
	private List<Event> events=new ArrayList();
	
	
	

	public User() {
		super();
	}

	public User(Integer id, String nom, String prenom, String mail, String password, List<Event> events) {
		super(id, nom, prenom, mail, password);
		this.events = events;
	}
	
	public User(String nom, String prenom, String mail, String password) {
		super(nom, prenom, mail, password);
	}

	public List<Message> getMessages() {
		return messages;
	}

	public void setMessages(List<Message> messages) {
		this.messages = messages;
	}

	public List<Participation> getParticipations() {
		return participations;
	}

	public void setParticipations(List<Participation> participations) {
		this.participations = participations;
	}

	public List<Event> getEvents() {
		return events;
	}

	public void setEvents(List<Event> events) {
		this.events = events;
	}



	@Override
	public String toString() {
		return "User [id=" + id + ", nom=" + nom + ", prenom=" + prenom + ", mail=" + mail + ", password=" + password
				+ "]";
	}

	
	







}
