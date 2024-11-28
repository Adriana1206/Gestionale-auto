package com.example.car_project.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.car_project.model.Auto;

/* Interfaccia per gestire le operazioni sul database
 * JpaRepository fornisce automaticamente i metodi base per lavorare con il database, 
 * come findAll(), save(), deleteById(), ecc.
 */

public interface AutoRepository extends JpaRepository<Auto, Long>{

}
