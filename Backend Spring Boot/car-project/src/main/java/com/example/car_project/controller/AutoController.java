package com.example.car_project.controller;

import com.example.car_project.model.Auto;
import com.example.car_project.repository.AutoRepository;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")  // Permette le richieste dal frontend su localhost:3000
public class AutoController {

	private final AutoRepository autoRepository;
	
	//Costruttore repository
	public AutoController(AutoRepository autoRepository) {
		this.autoRepository = autoRepository;
	}
	
	//Endpoint per ottenere tutte le auto
	@GetMapping("/auto")
	public List<Auto> getAllAuto(){
		return autoRepository.findAll();
	}
	
	//Endpoint per creare un auto
	@PostMapping("/auto")
	public Auto createAuto(@RequestBody Auto auto) {
	    return autoRepository.save(auto);
	}
	
	//Endpoint per modificare un'auto esistente
	@PutMapping("/auto/{id}")
	public Auto updateAuto(@PathVariable Long id, @RequestBody Auto autoDetails) {
	    Auto auto = autoRepository.findById(id)
	            .orElseThrow(() -> new RuntimeException("Auto non trovata con id: " + id));

	    auto.setMarca(autoDetails.getMarca());
	    auto.setModello(autoDetails.getModello());
	    auto.setAnno(autoDetails.getAnno());
	    auto.setPrezzo(autoDetails.getPrezzo());

	    return autoRepository.save(auto);
	}
	
	//Endpoint per eliminare un'auto
	@DeleteMapping("/auto/{id}")
	public void deleteAuto(@PathVariable Long id) {
	    Auto auto = autoRepository.findById(id)
	            .orElseThrow(() -> new RuntimeException("Auto non trovata con id: " + id));

	    autoRepository.delete(auto);
	}
	
	
}
