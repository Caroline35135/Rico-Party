package rico.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import rico.model.Message;



public interface IMessageRepo extends JpaRepository<Message, Long>{

}
