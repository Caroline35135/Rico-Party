package rico.rest;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import com.fasterxml.jackson.annotation.JsonView;

import rico.model.Message;
import rico.model.Views;
import rico.repo.IMessageRepo;


@RestController
@RequestMapping("/message")
@CrossOrigin("*")
public class MessageRestController {


	@Autowired
	private IMessageRepo messageRepo;

	@GetMapping("")
	@JsonView(Views.ViewMessage.class)
	public List<Message> findAll() {
		return messageRepo.findAll();
	}

	@GetMapping("/{id}")
	@JsonView(Views.ViewMessage.class)
	public Message findById(@PathVariable("id") Integer id) {
		Optional<Message> optMessage = messageRepo.findById(id);

		if (optMessage.isEmpty()) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND);
		}

		return optMessage.get();
	}

	@PostMapping("")
	@JsonView(Views.ViewMessage.class)
	public Message create(@RequestBody Message message) {
		message = messageRepo.save(message);

		return message;
	}

	@PutMapping("/{id}")
	@JsonView(Views.ViewMessage.class)
	public Message update(@RequestBody Message message, @PathVariable Integer id) {
		if (id != message.getId()|| !messageRepo.existsById(id)) {
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST);
		}
		message = messageRepo.save(message);
		return message;
	}

	@DeleteMapping("/{id}")
	public void deleteById(@PathVariable Integer id) {
		messageRepo.deleteById(id);
	}
	


	
}

