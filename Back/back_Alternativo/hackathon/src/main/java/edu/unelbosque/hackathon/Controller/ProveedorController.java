package edu.unelbosque.hackathon.Controller;

import edu.unelbosque.hackathon.Models.Proveedor;
import edu.unelbosque.hackathon.Repository.PorveedorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api")
public class ProveedorController {
    
    @Autowired
    PorveedorRepository proveedorRepository;
    
    /**
     * This method access to all the suppliers in the database 
     * @param nombre
     * @return List of suppliers and HTTP response
     */
    @GetMapping("/proveedors")
    public ResponseEntity<List<Proveedor>> getAllProveedors(@RequestParam(required = false) String nombre) {
    	
        try {
            List<Proveedor> proveedores = new ArrayList<>();
            if (nombre == null) {
                proveedorRepository.findAll().forEach(proveedores::add);
            } else {
                proveedorRepository.findByNombre(nombre).forEach(proveedores::add);
                
            }
            if (proveedores.isEmpty()) {
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
            }
        
            return new ResponseEntity<List<Proveedor>>(proveedores, HttpStatus.OK);


        } catch (Exception e) {
            System.out.println(e);
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);

        }
    }

    /**
     * This method creates a supplier in the database
     * @param proveedor
     * @return supplier created and HTTP response
     */
    @PostMapping("/proveedor")
    public ResponseEntity<Proveedor> crearProveedor(@RequestBody Proveedor proveedor) {

        try {

            String nombre = proveedor.getNombre();
            String codigo = proveedor.getCodigo();
            String ubicacion = proveedor.getUbicacion();
            String disponibilidadEnvio = proveedor.getDisponibilidadEnvio();
            String abiertoDesde = proveedor.getAbiertoDesde();
            String abiertoHasta = proveedor.getAbiertoHasta();
            

            Proveedor nuevo = new Proveedor(nombre, codigo, ubicacion,
                    disponibilidadEnvio, abiertoDesde, abiertoHasta);

            
            proveedorRepository.save(nuevo);

            
            return new ResponseEntity<Proveedor>(nuevo, HttpStatus.OK);



        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }


    }

    /**
     * This method find a supplier by code in the database by code
     * @param codigo
     * @return List of suppliers and HTTP response
     */
    @GetMapping("/proveedor/{codigo}")
    public ResponseEntity<List<Proveedor>> getProveedorByCode(@PathVariable("codigo") String codigo) {

        try {
            List<Proveedor> proveedor = proveedorRepository.findByCodigo(codigo);

            if (proveedor.isEmpty()) {
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);

            }
            System.out.println("Valores: "+proveedor);
            return new ResponseEntity<>(proveedor, HttpStatus.OK);

        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }

    }

    /**
     * This method update the supplier by code in the database
     * @param codigo
     * @param proveedor
     * @return HTTP response
     */
    @PutMapping("/proveedor/{codigo}")
    public ResponseEntity<Proveedor> updateProveedor(@PathVariable("codigo") String codigo, @RequestBody Proveedor proveedor) {

        List<Proveedor> proveedorList = proveedorRepository.findByCodigo(codigo);

        Proveedor proveedorD = proveedorList.get(0);

        Optional<Proveedor> proveedorData = Optional.ofNullable(proveedorD);

        if (proveedorData.isPresent()) {

            Proveedor proAux = proveedorData.get();

            proAux.setNombre(proveedor.getNombre());
            proAux.setCodigo(proveedor.getCodigo());
            proAux.setUbicacion(proveedor.getUbicacion());
            proAux.setDisponibilidadEnvio(proveedor.getDisponibilidadEnvio());
            proAux.setAbiertoDesde(proveedor.getAbiertoDesde());
            proAux.setAbiertoHasta(proveedor.getAbiertoHasta());


            return new ResponseEntity<>(proveedorRepository.save(proAux), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

    }

    /**
     * This method delete the supplier by code in the database
     * @param codigo
     * @return HTTP response
     */
    @DeleteMapping("/proveedor/{codigo}")
    public ResponseEntity<HttpStatus> deleteProveedor(@PathVariable("codigo") String codigo) {
        try {

            proveedorRepository.deleteByCodigo(codigo);
            return new ResponseEntity<>(HttpStatus.OK);

        } catch (Exception e) {

            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    
    /**
     * This method delete all the suppliers in the database
     * @return HTTP response
     */
    @DeleteMapping("/proveedor")
    public ResponseEntity<HttpStatus> deleteAllProveedor() {
        try {
            proveedorRepository.deleteAll();
            return new ResponseEntity<>(HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


}
