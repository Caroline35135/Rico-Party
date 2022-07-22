package rico.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import rico.model.Compte;



public interface ICompteRepo extends JpaRepository<Compte, Long>{

}
