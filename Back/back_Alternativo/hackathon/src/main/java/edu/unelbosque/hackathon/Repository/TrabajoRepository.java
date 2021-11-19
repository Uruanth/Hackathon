package edu.unelbosque.hackathon.Repository;

import edu.unelbosque.hackathon.Models.Trabajo;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface TrabajoRepository extends MongoRepository<Trabajo, String> {
}
