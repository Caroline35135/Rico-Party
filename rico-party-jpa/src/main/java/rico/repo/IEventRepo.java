package rico.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import rico.model.Event;



public interface IEventRepo extends JpaRepository<Event, Long>{

}
