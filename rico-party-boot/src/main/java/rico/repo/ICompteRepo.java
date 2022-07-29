package rico.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import rico.model.Compte;



public interface ICompteRepo extends JpaRepository<Compte, Long>{
	
	@Query("SELECT c from Compte c where c.mail=?1 and c.password=?2")
	Compte seConnecter(String mail, String password);

}
