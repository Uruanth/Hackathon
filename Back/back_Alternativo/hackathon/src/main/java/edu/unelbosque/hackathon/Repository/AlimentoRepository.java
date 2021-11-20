package edu.unelbosque.hackathon.Repository;

import edu.unelbosque.hackathon.Models.Alimento;
import edu.unelbosque.hackathon.Models.Beneficiario;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface AlimentoRepository extends MongoRepository<Alimento,String> {
	
	/**
	 * @param nombre
	 * @return list of food found by name
	 */
    List<Alimento> findByNombre(String nombre);
    
    /**
     * @param codigo
     * @return list of food found by code
     */
    List<Alimento> findByCodigo(String codigo);
    void deleteByCodigo(String codigo);

}
