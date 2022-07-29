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

import rico.model.Participation;
import rico.model.Views;
import rico.repo.IParticipationRepo;
@RestController
@RequestMapping("/participation")
@CrossOrigin("*")
public class ParticipationRestController {
	@Autowired
	private IParticipationRepo participationRepo;
	
	@GetMapping("")
	@JsonView(Views.ViewParticipation.class)
	
	public List<Participation> findAll() {
		
		return participationRepo.findAll();

	}
		
	@GetMapping("/{id}")
	@JsonView(Views.ViewParticipation.class)
	public Participation findById(@PathVariable("id") Integer id) {
		Optional<Participation> optParticipation = participationRepo.findById(id);

		if (optParticipation.isEmpty()) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND);
		}

		return optParticipation.get();
	}

	@PostMapping("")
	@JsonView(Views.ViewParticipation.class)
	public Participation create(@RequestBody @Valid Participation participation, BindingResult result) {
		if (result.hasErrors()) {
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "La participation n'a pu être créée");
		}

		participation = participationRepo.save(participation);

		return participation;
	}

	@PutMapping("/{id}")
	@JsonView(Views.ViewParticipation.class)
	public Participation update(@RequestBody Participation participation, @PathVariable Integer id) {
		participation = participationRepo.save(participation);

		return participation;
	}

	@DeleteMapping("/{id}")
	public void deleteById(@PathVariable Integer id) {
		participationRepo.deleteById(id);
	}
	
		
		
		
	
}
