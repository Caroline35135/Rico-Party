package rico.rest;

import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.validation.BindingResult;
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

import rico.model.Adresse;
import rico.model.Contribution;
import rico.model.Event;
import rico.model.Views;
import rico.repo.IContributionRepo;
import rico.repo.IEventRepo;


@RestController
@RequestMapping("/event")
@CrossOrigin("*")
public class EventRestController {

	@Autowired
	private IEventRepo eventRepo;
	@Autowired
	private IContributionRepo contributionRepo;

	@GetMapping("")
	@JsonView(Views.ViewEvent.class)
	public List<Event> findAll() {
		return eventRepo.findAll();
	}

	@GetMapping("/{id}")
	@JsonView(Views.ViewEvent.class)
	public Event findById(@PathVariable("id") Integer id) {
		Optional<Event> optEvent = eventRepo.findById(id);

		if (optEvent.isEmpty()) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND);
		}

		return optEvent.get();
	}

	@PostMapping("")
	@JsonView(Views.ViewEvent.class)
	public Event create(@RequestBody Event event) {
		event = eventRepo.save(event);
		return event;
	}

	@PutMapping("/{id}")
	@JsonView(Views.ViewEvent.class)
	public Event update(@RequestBody Event event, @PathVariable Integer id) {
		if (id != event.getId()|| !eventRepo.existsById(id)) {
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST);
		}
		event = eventRepo.save(event);
		return event;
	}

	@DeleteMapping("/{id}")
	public void deleteById(@PathVariable Integer id) {
		eventRepo.deleteById(id);
	}


	//	@GetMapping("/adresse")
	//	@JsonView(Views.ViewEvent.class) 
	//	public List<Adresse> findAllAdresses () { 
	//		return eventRepo.findAllAdresses();
	//	}
	//	 
	//	@GetMapping("/{id}/adresse")
	//	@JsonView(Views.ViewEvent.class)
	//	public Adresse findAdresseByIdEvent(@PathVariable Integer id) {
	//		Optional<Adresse> optAdresse = eventRepo.findAdresseByIdEvent(id);
	//		return optAdresse.get();
	//	}



	@GetMapping("/{id}/contributions")
	@JsonView(Views.ViewContribution.class)
	public List<Contribution> findAllContributionsByIdEvent(@PathVariable Integer id) {
		return contributionRepo.findAllByIdEvent(id);
	}








}

