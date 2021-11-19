package edu.unelbosque.hackathon.Repository;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface Cupon extends MongoRepository<Cupon, String> {
}
