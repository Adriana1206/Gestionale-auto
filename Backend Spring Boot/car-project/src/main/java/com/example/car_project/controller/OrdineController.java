package com.example.car_project.controller;

import com.example.car_project.model.Ordine;
import com.example.car_project.repository.OrdineRepository;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/ordini")
public class OrdineController {

    private final OrdineRepository ordineRepository;

    public OrdineController(OrdineRepository ordineRepository) {
        this.ordineRepository = ordineRepository;
    }

    @GetMapping
    public List<Ordine> getAllOrdini() {
        return ordineRepository.findAll();
    }

    @PostMapping
    public Ordine createOrdine(@RequestBody Ordine ordine) {
        return ordineRepository.save(ordine);
    }
}
