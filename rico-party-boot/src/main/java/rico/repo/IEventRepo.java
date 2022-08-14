package rico.repo;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import rico.model.Adresse;
import rico.model.Contribution;
import rico.model.Event;



public interface IEventRepo extends JpaRepository<Event, Integer>{

	@Query("select distinct a from Event e right join e.adresse a")
	List<Adresse> findAllAdresses();
	
	@Query("select distinct a from Event e right join e.adresse a where e.id = ?1")
	Optional<Adresse> findAdresseByIdEvent(Integer id);
	
	/*
	 * @Query("select distinct e from Event e left join fetch e.demandes")
	 * List<Event> findAllWithContribs();*/
	/*
	 * @Query("select distinct c from Event e right join e.demandes d where e.id = ?1"
	 * ) List<Contribution> findContribsByIdEvent(Integer id);
	 */

}
