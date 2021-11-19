package edu.unelbosque.hackathon.Repository;

import edu.unelbosque.hackathon.Models.Proveedor;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface PorveedorRepository extends MongoRepository<Proveedor, String> {
}
