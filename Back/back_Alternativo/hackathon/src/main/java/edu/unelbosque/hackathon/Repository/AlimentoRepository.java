package edu.unelbosque.hackathon.Repository;

import edu.unelbosque.hackathon.Models.Alimento;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface AlimentoRepository extends MongoRepository<Alimento,String> {
}
