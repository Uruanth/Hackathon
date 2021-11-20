package edu.unelbosque.hackathon.Controller;


import edu.unelbosque.hackathon.Models.Beneficiario;
import edu.unelbosque.hackathon.Repository.BeneficiarioRepository;
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
public class BeneficiarioController {

    @Autowired
    BeneficiarioRepository beneficiarioRepository;

    /**
     * This method access to all the beneficiaries in the database 
     * @param nombre
     * @return HTTP response
     */
    @GetMapping("/beneficiarios")
    public ResponseEntity<List<Beneficiario>> getAllBeneficiarios(@RequestParam(required = false) String nombre) {
        try {
            List<Beneficiario> beneficiarios = new ArrayList<>();
            if (nombre == null) {
                System.out.println(beneficiarios);
                beneficiarioRepository.findAll().forEach(beneficiarios::add);
                System.out.println("beneficiarios = " + beneficiarios);
            } else {
                beneficiarioRepository.findByNombre(nombre).forEach(beneficiarios::add);
            }
            if (beneficiarios.isEmpty()) {
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
            }

            return new ResponseEntity<List<Beneficiario>>(beneficiarios, HttpStatus.OK);


        } catch (Exception e) {
            System.out.println(e);
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);

        }
    }

    /**
     * This method creates a beneficiary in the database
     * @param beneficiario
     * @return HTTP response
     */
    @PostMapping("/beneficiario")
    public ResponseEntity<Beneficiario> crearBeneficiario(@RequestBody Beneficiario beneficiario) {

        try {

            String nombre = beneficiario.getNombre();
            String codigo = beneficiario.getCodigo();
            int personasACargo = beneficiario.getPersonasACargo();
            int edades = beneficiario.getEdades();
            String requisitosNutricionales = beneficiario.getRequisitosNutricionales();
            String motivoSolicitud = beneficiario.getMotivoSolicitud();
            String usoEstimado = beneficiario.getUsoEstimado();

            Beneficiario nuevo = new Beneficiario(nombre, codigo, personasACargo, edades,
                    requisitosNutricionales, motivoSolicitud, usoEstimado);


            beneficiarioRepository.save(nuevo);
            return new ResponseEntity<Beneficiario>(nuevo, HttpStatus.OK);


        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }


    }

    /**
     * This method find a beneficiary by code in the database
     * @param codigo
     * @return HTTP response
     */
    @GetMapping("/beneficiario/{codigo}")
    public ResponseEntity<List<Beneficiario>> getBeneficiarioByCode(@PathVariable("codigo") String codigo) {

        try {
            List<Beneficiario> beneficiario = beneficiarioRepository.findByCodigo(codigo);

            if (beneficiario.isEmpty()) {
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);

            }

            return new ResponseEntity<>(beneficiario, HttpStatus.OK);

        } catch (Exception e) {
            System.out.println(e);
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }

    }

    /**
     * This method update the beneficiary by code in the database
     * @param codigo
     * @param beneficiario
     * @return HTTP response
     */
    @PutMapping("/beneficiario/{codigo}")
    public ResponseEntity<Beneficiario> updateBeneficiario(@PathVariable("codigo") String codigo, @RequestBody Beneficiario beneficiario) {

        List<Beneficiario> beneficiarioList = beneficiarioRepository.findByCodigo(codigo);

        Beneficiario beneficiarioD = beneficiarioList.get(0);

        Optional<Beneficiario> beneficiarioData = Optional.ofNullable(beneficiarioD);

        if (beneficiarioData.isPresent()) {

            Beneficiario benAux=beneficiarioData.get();

            benAux.setNombre(beneficiario.getNombre());
            benAux.setCodigo(beneficiario.getCodigo());
            benAux.setPersonasACargo(beneficiario.getPersonasACargo());
            benAux.setEdades(beneficiario.getEdades());
            benAux.setRequisitosNutricionales(beneficiario.getRequisitosNutricionales());
            benAux.setMotivoSolicitud(beneficiario.getMotivoSolicitud());
            benAux.setUsoEstimado(beneficiario.getUsoEstimado());
            return new ResponseEntity<>(beneficiarioRepository.save(benAux), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

    }

    /**
     * This method delete a beneficiary by code in the database
     * @param codigo
     * @return HTTP response
     */
    @DeleteMapping("/beneficiario/{codigo}")
    public ResponseEntity<HttpStatus> deleteBeneficiario(@PathVariable("codigo") String codigo) {
        try {

            beneficiarioRepository.deleteByCodigo(codigo);
            return new ResponseEntity<>(HttpStatus.OK);

        } catch (Exception e) {

            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    /**
     * This method delete all the beneficiaries in the database
     * @return HTTP response
     */
    @DeleteMapping("/beneficiario")
    public ResponseEntity<HttpStatus> deleteAllBeneficiario() {
        try {
            beneficiarioRepository.deleteAll();
            return new ResponseEntity<>(HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


}
