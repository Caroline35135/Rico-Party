package rico.model;


import javax.persistence.Column;
import javax.persistence.DiscriminatorColumn;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Inheritance;
import javax.persistence.InheritanceType;
import javax.persistence.Version;

@Entity
@Inheritance(strategy = InheritanceType.SINGLE_TABLE)
@DiscriminatorColumn(name="type_compte",columnDefinition = "ENUM('admin','user') default 'user'")
public abstract class Compte {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	protected Integer id;
	
	@Column(length=15,nullable = false)
	protected String nom;
	@Column(length=15,nullable = false)
	protected String prenom;
	@Column(length=30,unique = true,nullable=false)
	protected String mail;
	@Column(length=125,nullable = false)
	protected String password;
	
	
	@Version
	private int version;
	
	
	
	public Compte() {
		super();
	}

	public Compte(Integer id, String nom, String prenom, String mail, String password) {
		this.id = id;
		this.nom = nom;
		this.prenom = prenom;
		this.mail = mail;
		this.password = password;
	}
	
	public Compte(String nom, String prenom, String mail, String password) {
		this.nom = nom;
		this.prenom = prenom;
		this.mail = mail;
		this.password = password;
	}


	

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getNom() {
		return nom;
	}


	public String getPrenom() {
		return prenom;
	}


	public String getMail() {
		return mail;
	}


	public String getPassword() {
		return password;
	}



	public void setNom(String nom) {
		this.nom = nom;
	}


	public void setPrenom(String prenom) {
		this.prenom = prenom;
	}


	public void setMail(String mail) {
		this.mail = mail;
	}


	public void setPassword(String password) {
		this.password = password;
	}

	public int getVersion() {
		return version;
	}

	public void setVersion(int version) {
		this.version = version;
	}

	


	
	
	
	
	

}
