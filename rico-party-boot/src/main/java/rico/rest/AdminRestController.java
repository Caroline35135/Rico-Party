package rico.rest;

import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.server.ResponseStatusException;

import com.fasterxml.jackson.annotation.JsonView;


import rico.model.Admin;
import rico.model.Compte;
import rico.model.Views;
import rico.repo.IAdminRepo;


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



@RestController
@RequestMapping("/admin")
@CrossOrigin("*")
public class AdminRestController {
	
	@Autowired
	private IAdminRepo adminRepo;

	@GetMapping("")
	@JsonView(Views.ViewAdmin.class)
	public List<Admin> findAll() {

		return adminRepo.findAll();
	}

	@GetMapping("/{id}")
	@JsonView(Views.ViewAdmin.class)
	public Admin findById(@PathVariable("id") Integer id) {
		Optional<Admin> optAdmin = adminRepo.findById(id);

		if(optAdmin.isEmpty()) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND);
		}
		
		return (Admin) optAdmin.get();
	}

	@PostMapping("")
	@JsonView(Views.ViewAdmin.class)
	public Admin create(@RequestBody @Valid Admin admin, BindingResult result) {
		if(result.hasErrors()) {
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "L'admin n'a pu être créée");
		}
		
		admin = adminRepo.save(admin);

		return admin;
	}

	@PutMapping("/{id}")
	@JsonView(Views.ViewAdmin.class)
	public Admin update(@RequestBody Admin admin, @PathVariable Integer id) {
		admin = adminRepo.save(admin);

		return admin;
	}
	
	@DeleteMapping("/{id}")
	public void deleteById(@PathVariable Integer id) {
		adminRepo.deleteById(id);
	}



}
