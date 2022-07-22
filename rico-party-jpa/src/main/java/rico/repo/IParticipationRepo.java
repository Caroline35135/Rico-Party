package rico.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import rico.model.Participation;


public interface IParticipationRepo extends JpaRepository<Participation, Long>{
	
	@Query("Select p from Participation p where p.event.id=?1")
	List<Participation> findAllByIdEvent(int idEvent);
	

}
