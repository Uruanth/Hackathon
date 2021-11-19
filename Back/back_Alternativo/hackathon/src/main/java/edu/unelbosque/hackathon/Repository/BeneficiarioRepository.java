package edu.unelbosque.hackathon.Repository;

import edu.unelbosque.hackathon.Models.Beneficiario;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface BeneficiarioRepository extends MongoRepository<Beneficiario, String> {

    List<Beneficiario> findByNombre(String nombre);
    List<Beneficiario> findByCodigo(String codigo);
    List<Beneficiario> deleteByCodigo(String codigo);

}
