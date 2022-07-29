package rico.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import rico.model.Contribution;



public interface IContributionRepo extends JpaRepository<Contribution, Long>{
	
	@Query("Select m from Contribution m where m.event.id=?1")
	List<Contribution> findAllByIdEvent(int idEvent);

}
