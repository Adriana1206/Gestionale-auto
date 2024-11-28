package com.example.car_project.model;

import jakarta.persistence.*;
import java.math.BigDecimal;

@Entity //Entità che rappresenta la tabella
@Table(name = "automobili") //Specifica il nome della tabella
public class Auto {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String marca;
    private String modello;
    private int anno;
    private String colore;

    @Column(nullable = false) // Rende il campo obbligatorio nel database
    private BigDecimal prezzo; // Usa BigDecimal per rappresentare importi monetari

    // Getters e Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getMarca() {
        return marca;
    }

    public void setMarca(String marca) {
        this.marca = marca;
    }

    public String getModello() {
        return modello;
    }

    public void setModello(String modello) {
        this.modello = modello;
    }

    public int getAnno() {
        return anno;
    }

    public void setAnno(int anno) {
        this.anno = anno;
    }

    public String getColore() {
        return colore;
    }

    public void setColore(String colore) {
        this.colore = colore;
    }

    public BigDecimal getPrezzo() {
        return prezzo;
    }

    public void setPrezzo(BigDecimal prezzo) {
        this.prezzo = prezzo;
    }
}
