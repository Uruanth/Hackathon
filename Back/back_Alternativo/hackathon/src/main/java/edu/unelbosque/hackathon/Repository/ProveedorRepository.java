package edu.unelbosque.hackathon.Repository;

import edu.unelbosque.hackathon.Models.Proveedor;
import edu.unelbosque.hackathon.Models.Proveedor;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface PorveedorRepository extends MongoRepository<Proveedor, String> {
	
	/**
	 * @param nombre
	 * @return list of suppliers found by name
	 */
    List<Proveedor> findByNombre(String nombre);
    
    /**
     * @param codigo
     * @return list of suppliers found by code
     */
    List<Proveedor> findByCodigo(String codigo);
    void deleteByCodigo(String codigo);
}
