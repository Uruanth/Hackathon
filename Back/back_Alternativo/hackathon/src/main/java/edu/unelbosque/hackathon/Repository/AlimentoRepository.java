package edu.unelbosque.hackathon.Repository;

import edu.unelbosque.hackathon.Models.Alimento;
import edu.unelbosque.hackathon.Models.Beneficiario;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface AlimentoRepository extends MongoRepository<Alimento,String> {

    List<Alimento> findByNombre(String nombre);
    List<Alimento> findByCodigo(String codigo);
    void deleteByCodigo(String codigo);

}
