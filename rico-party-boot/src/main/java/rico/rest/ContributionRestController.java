package rico.rest;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.annotation.JsonView;

import rico.model.Contribution;
import rico.model.Views;
import rico.repo.IContributionRepo;

@RestController
@RequestMapping("/contribution")
@CrossOrigin("*")
public class ContributionRestController {
	
	@Autowired
	private IContributionRepo contributionRepo;

	@GetMapping("")
	@JsonView(Views.ViewContribution.class)
	@ResponseBody
	public List<Contribution> findAll() {
		return contributionRepo.findAll();
	}

	@GetMapping("/{id}")
	@JsonView(Views.ViewContribution.class)
	public ResponseEntity<Contribution> findById(@PathVariable Integer id) {
		Optional<Contribution> optContribution = contributionRepo.findById(id);

		if (optContribution.isPresent()) {
			return new ResponseEntity<Contribution>(optContribution.get(), HttpStatus.OK);
		}
		return new ResponseEntity<Contribution>(HttpStatus.NOT_FOUND);
	}

	@PostMapping("")
	@JsonView(Views.ViewContribution.class)
	public ResponseEntity<Contribution> create(@RequestBody Contribution contribution) {
		contribution = contributionRepo.save(contribution);

		return new ResponseEntity<Contribution>(contribution, HttpStatus.OK);
	}
	
	@PutMapping("/{id}")
	@JsonView(Views.ViewContribution.class)
	public ResponseEntity<Contribution> update(@RequestBody Contribution contribution, @PathVariable Long id) {
		contribution = contributionRepo.save(contribution);

		return new ResponseEntity<Contribution>(contribution, HttpStatus.OK);
	}

	@DeleteMapping("/{id}")
	public void deleteById(@PathVariable Integer id) {
		contributionRepo.deleteById(id);
	}
	
	
	
}
