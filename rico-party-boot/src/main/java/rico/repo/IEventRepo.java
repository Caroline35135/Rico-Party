package rico.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import rico.model.Event;



public interface IEventRepo extends JpaRepository<Event, Integer>{


}
