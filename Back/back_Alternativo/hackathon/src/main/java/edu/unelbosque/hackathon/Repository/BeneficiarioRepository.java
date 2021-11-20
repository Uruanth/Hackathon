package edu.unelbosque.hackathon.Repository;

import edu.unelbosque.hackathon.Models.Beneficiario;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface BeneficiarioRepository extends MongoRepository<Beneficiario, String> {
	
	/**
	 * @param nombre
	 * @return list of beneficiaries found by name
	 */
    List<Beneficiario> findByNombre(String nombre);
    
    /**
     * @param codigo
     * @return list of beneficiaries found by code
     */
    List<Beneficiario> findByCodigo(String codigo);
    void deleteByCodigo(String codigo);

}
