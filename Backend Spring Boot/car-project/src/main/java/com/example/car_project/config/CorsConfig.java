package com.example.car_project.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class CorsConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        // Permetti richieste da localhost:3000 (il tuo frontend React)
        registry.addMapping("/**")
                .allowedOrigins("http://localhost:3000")  // Aggiungi qui il dominio e la porta del tuo frontend
                .allowedMethods("GET", "POST", "PUT", "DELETE")  // Le metodologie che vuoi permettere
                .allowedHeaders("*");  // Permetti tutti gli header
    }
}