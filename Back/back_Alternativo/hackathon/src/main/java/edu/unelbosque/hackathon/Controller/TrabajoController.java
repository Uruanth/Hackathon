package edu.unelbosque.hackathon.Controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import edu.unelbosque.hackathon.Models.Trabajo;
import edu.unelbosque.hackathon.Repository.TrabajoRepository;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api")
public class TrabajoController {
    
    @Autowired
    TrabajoRepository trabajoRepository;

    @GetMapping("/trabajos")
    public ResponseEntity<List<Trabajo>> getAllTrabajos(@RequestParam(required = false) String categoria) {
        try {
            List<Trabajo> trabajo = new ArrayList<>();
            
            if (categoria == null) {
                trabajoRepository.findAll().forEach(trabajo::add);
            } else {
                trabajoRepository.findByCategoria(categoria).forEach(trabajo::add);
            }
            if (trabajo.isEmpty()) {
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
            }

            return new ResponseEntity<List<Trabajo>>(trabajo, HttpStatus.OK);


        } catch (Exception e) {
            System.out.println(e);
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);

        }
    }


    @PostMapping("/trabajo")
    public ResponseEntity<Trabajo> crearTrabajo(@RequestBody Trabajo trabajo) {

        try {

            String categoria = trabajo.getCategoria();
            String requisito = trabajo.getRequisito();
            String ubicacion = trabajo.getUbicacion();
            String numerocontacto = trabajo.getNumerocontacto();
            String bonificiacion = trabajo.getBonificacion();              

            Trabajo nuevo = new Trabajo(categoria, requisito, ubicacion, numerocontacto, ubicacion);


            trabajoRepository.save(nuevo);
            return new ResponseEntity<Trabajo>(nuevo, HttpStatus.OK);


        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }


    }


    @GetMapping("/trabajo/{categoria}")
    public ResponseEntity<List<Trabajo>> getTrabajoByCategoria(@PathVariable("categoria") String categoria) {

        try {
            List<Trabajo> trabajo = trabajoRepository.findByCategoria(categoria);

            if (trabajo.isEmpty()) {
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);

            }

            return new ResponseEntity<>(trabajo, HttpStatus.OK);

        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }

    }
    
    @PutMapping("/trabajo/{categoria}")
    public ResponseEntity<Trabajo> updateTrabajo(@PathVariable("categoria") String categoria, @RequestBody Trabajo trabajo) {

        List<Trabajo> trabajoList = trabajoRepository.findByCategoria(categoria);

        Trabajo trabajoD = trabajoList.get(0);

        Optional<Trabajo> trabajoData = Optional.ofNullable(trabajoD);

        if (trabajoData.isPresent()) {

            Trabajo proAux = trabajoData.get();

            proAux.setCategoria(trabajo.getCategoria());
            proAux.setRequisito(trabajo.getRequisito());
            proAux.setUbicacion(trabajo.getUbicacion());
            proAux.setNumerocontacto(trabajo.getNumerocontacto());
            proAux.setBonificacion(trabajo.getBonificacion());

            return new ResponseEntity<>(trabajoRepository.save(proAux), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

    }

    @DeleteMapping("/trabajo/{categoria}")
    public ResponseEntity<HttpStatus> deleteTrabajo(@PathVariable("categoria") String categoria) {
        try {

            trabajoRepository.deleteByCategoria(categoria);
            return new ResponseEntity<>(HttpStatus.OK);

        } catch (Exception e) {

            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    
    @DeleteMapping("/trabajo")
    public ResponseEntity<HttpStatus> deleteAllTrabajos() {
        try {
            trabajoRepository.deleteAll();
            return new ResponseEntity<>(HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}