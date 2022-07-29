package rico.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import rico.model.Message;



public interface IMessageRepo extends JpaRepository<Message, Integer>{
	
//	@Query("Select m from Message m where m.event.id=?1")
//	List<Message> findAllByIdEvent(Integer idEvent);
	

}
