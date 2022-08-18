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

import rico.model.Contribution;
import rico.model.Event;
import rico.model.User;
import rico.model.Views;
import rico.repo.IContributionRepo;
import rico.repo.IEventRepo;
import rico.repo.IUserRepo;
import rico.rest.dto.ConnexionDTO;


@RestController
@RequestMapping("/user")
@CrossOrigin("*")
public class UserRestController {

	@Autowired
	private IUserRepo userRepo;
	@Autowired
	private IEventRepo eventRepo;

	@GetMapping("")
	@JsonView(Views.ViewUser.class)
	public List<User> findAll() {
		return userRepo.findAll();
	}

	@GetMapping("/{id}")
	@JsonView(Views.ViewUser.class)
	public User findById(@PathVariable("id") Integer id) {
		Optional<User> optUser = userRepo.findById(id);

		if (optUser.isEmpty()) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND);
		}

		return optUser.get();
	}

	@PostMapping("")
	@JsonView(Views.ViewUser.class)
	public User create(@RequestBody User user) {
		user = userRepo.save(user);

		return user;
	}

	@PutMapping("/{id}")
	@JsonView(Views.ViewUser.class)
	public User update(@RequestBody User user, @PathVariable Integer id) {
		if (id != user.getId()|| !userRepo.existsById(id)) {
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST);
		}
		user = userRepo.save(user);
		return user;
	}

	@DeleteMapping("/{id}")
	public void deleteById(@PathVariable Integer id) {
		userRepo.deleteById(id);
	}
	
	@PostMapping("/connexion")
	@JsonView(Views.ViewUser.class)
	public User connexion(@RequestBody ConnexionDTO connexionDTO) {
		User user = userRepo.seConnecter(connexionDTO.getMail(), connexionDTO.getPassword());
		
		if(user == null) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND);
		}

		return user;
	}
	
	@GetMapping("/{id}/events")
	@JsonView(Views.ViewEvent.class)
	public List<Event> findAllEventsByIdCreateur(@PathVariable Integer id) {
		return eventRepo.findAllByIdCreateur(id);
	}




	
}

