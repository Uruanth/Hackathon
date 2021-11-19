package edu.unelbosque.hackathon.Controller;

import edu.unelbosque.hackathon.Models.Alimento;
import edu.unelbosque.hackathon.Models.Proveedor;
import edu.unelbosque.hackathon.Repository.AlimentoRepository;
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
public class AlimentoController {

    @Autowired
    AlimentoRepository alimentoRepository;


    @GetMapping("/alimentos")
    public ResponseEntity<List<Alimento>> getAllProveedors(@RequestParam(required = false) String nombre) {
        try {
            List<Alimento> alimentos = new ArrayList<>();
            if (nombre == null) {
                alimentoRepository.findAll().forEach(alimentos::add);
            } else {
                alimentoRepository.findByNombre(nombre).forEach(alimentos::add);
            }
            if (alimentos.isEmpty()) {
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
            }

            return new ResponseEntity<List<Alimento>>(alimentos, HttpStatus.OK);


        } catch (Exception e) {
            System.out.println(e);
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);

        }
    }


    @PostMapping("/alimento")
    public ResponseEntity<Alimento> crearProveedor(@RequestBody Alimento alimento) {

        try {

            String nombre = alimento.getNombre();
            String codigo = alimento.getCodigo();
            String fechaVencimiento = alimento.getFechaVencimiento();
            String tipo = alimento.getTipo();



            Alimento nuevo = new Alimento(codigo, nombre, fechaVencimiento, tipo);


            alimentoRepository.save(nuevo);
            return new ResponseEntity<Alimento>(nuevo, HttpStatus.OK);


        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }


    }


    @GetMapping("/alimento/{codigo}")
    public ResponseEntity<List<Alimento>> getAlimentoByCode(@PathVariable("codigo") String codigo) {

        try {
            List<Alimento> alimento = alimentoRepository.findByCodigo(codigo);

            if (alimento.isEmpty()) {
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);

            }

            return new ResponseEntity<>(alimento, HttpStatus.OK);

        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }

    }


    @PutMapping("/alimento/{codigo}")
    public ResponseEntity<Alimento> updateAlimento(@PathVariable("codigo") String codigo, @RequestBody Alimento alimento) {

        List<Alimento> alimentoList = alimentoRepository.findByCodigo(codigo);

        Alimento alimentoD = alimentoList.get(0);

        Optional<Alimento> alimentoData = Optional.ofNullable(alimentoD);

        if (alimentoData.isPresent()) {

            Alimento aliAux = alimentoData.get();

            aliAux.setCodigo(alimento.getCodigo());
            aliAux.setNombre(alimento.getNombre());
            aliAux.setFechaVencimiento(alimento.getFechaVencimiento());
            aliAux.setTipo(alimento.getTipo());


            return new ResponseEntity<>(alimentoRepository.save(aliAux), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

    }


    @DeleteMapping("/alimento/{codigo}")
    public ResponseEntity<HttpStatus> deleteAlimento(@PathVariable("codigo") String codigo) {
        try {

            alimentoRepository.deleteByCodigo(codigo);
            return new ResponseEntity<>(HttpStatus.OK);

        } catch (Exception e) {

            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping("/alimento")
    public ResponseEntity<HttpStatus> deleteAllAlimentos() {
        try {
            alimentoRepository.deleteAll();
            return new ResponseEntity<>(HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


}
