package rico.repo;

import java.util.List;
//import java.util.Optional;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

//import rico.model.Adresse;
//import rico.model.Contribution;
import rico.model.Event;



public interface IEventRepo extends JpaRepository<Event, Integer>{

//	@Query("select distinct a from Event e right join e.adresse a")
//	List<Adresse> findAllAdresses();
//	
//	@Query("select distinct a from Event e right join e.adresse a where e.id = ?1")
//	Optional<Adresse> findAdresseByIdEvent(Integer id);
	
	@Query("Select e from Event e where e.createur.id=?1")
	List<Event> findAllByIdCreateur(Integer idCreateur);
	
	@Query("select distinct e from Event e left join fetch e.demandes where e.id = ?1")
	Optional<Event> findByIdWithContribs(Integer id);

}
