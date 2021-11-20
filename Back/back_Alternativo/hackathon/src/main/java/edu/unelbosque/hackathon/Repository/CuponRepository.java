package edu.unelbosque.hackathon.Repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

import edu.unelbosque.hackathon.Models.Cupon;

public interface CuponRepository extends MongoRepository<Cupon, String> {
	
	List<Cupon> findByCategoria(String categoria);
    void deleteByCategoria(String categoria);
}
