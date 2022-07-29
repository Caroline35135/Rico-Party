package rico.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import rico.model.Admin;
import rico.model.Compte;

public interface IAdminRepo extends JpaRepository<Compte, Integer>{
	
	@Query("SELECT c from Compte c where c.mail=?1 and c.password=?2")
	Admin seConnecter(String mail, String password);

}
