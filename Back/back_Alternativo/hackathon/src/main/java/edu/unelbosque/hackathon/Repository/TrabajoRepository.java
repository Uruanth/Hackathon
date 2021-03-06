package edu.unelbosque.hackathon.Repository;

import edu.unelbosque.hackathon.Models.Trabajo;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface TrabajoRepository extends MongoRepository<Trabajo, String> {
	
	List<Trabajo> findByCategoria(String categoria);
    void deleteByCategoria(String categoria);
}
