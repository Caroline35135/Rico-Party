package rico.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import rico.model.Participation;


public interface IParticipationRepo extends JpaRepository<Participation, Long>{

}
