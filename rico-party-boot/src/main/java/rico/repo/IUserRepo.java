package rico.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import rico.model.Compte;
import rico.model.User;

public interface IUserRepo extends JpaRepository<User, Integer>{
	
//	@Query("SELECT c from Compte c where c.mail=?1 and c.password=?2")
//	User seConnecter(String mail, String password);

}
