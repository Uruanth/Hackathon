package edu.unelbosque.hackathon.Repository;

import edu.unelbosque.hackathon.Models.Proveedor;
import edu.unelbosque.hackathon.Models.Proveedor;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface PorveedorRepository extends MongoRepository<Proveedor, String> {

    List<Proveedor> findByNombre(String nombre);
    List<Proveedor> findByCodigo(String codigo);
    List<Proveedor> deleteByCodigo(String codigo);
}
