package edu.unelbosque.hackathon.Controller;

import edu.unelbosque.hackathon.Models.Cupon;
import edu.unelbosque.hackathon.Models.Trabajo;
import edu.unelbosque.hackathon.Repository.CuponRepository;

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
public class CuponController {

	@Autowired
	CuponRepository cuponRepository;

	 @GetMapping("/cupones")
	    public ResponseEntity<List<Cupon>> getAllCupones(@RequestParam(required = false) String categoria) {
	        try {
	            List<Cupon> cupones = new ArrayList<>();
	            
	            if (categoria == null) {
	                cuponRepository.findAll().forEach(cupones::add);
	            } else {
	                cuponRepository.findByCategoria(categoria).forEach(cupones::add);
	            }
	            if (cupones.isEmpty()) {
	                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	            }

	            return new ResponseEntity<List<Cupon>>(cupones, HttpStatus.OK);


	        } catch (Exception e) {
	            System.out.println(e);
	            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);

	        }
	    }
	@PostMapping("/cupon")
	public ResponseEntity<Cupon> crearProveedor(@RequestBody Cupon cupon) {

		try {

			String categoria = cupon.getCategoria();
			String requisito = cupon.getRequisito();
			String ubicacion = cupon.getUbicacion();
			String numerocontacto = cupon.getNumerocontacto();

			Cupon nuevo = new Cupon(categoria, requisito, ubicacion, numerocontacto);

			cuponRepository.save(nuevo);
			return new ResponseEntity<Cupon>(nuevo, HttpStatus.OK);

		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}

	}

	@GetMapping("/cupon/{categoria}")
	public ResponseEntity<List<Cupon>> getCuponByCategoria(@PathVariable("categoria") String categoria) {

		try {
			List<Cupon> cupon = cuponRepository.findByCategoria(categoria);

			if (cupon.isEmpty()) {
				return new ResponseEntity<>(HttpStatus.NO_CONTENT);

			}

			return new ResponseEntity<>(cupon, HttpStatus.OK);

		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}

	}

	@PutMapping("/cupon/{categoria}")
	public ResponseEntity<Cupon> updateCupon(@PathVariable("categoria") String categoria,
			@RequestBody Cupon cupon) {

		List<Cupon> cuponList = cuponRepository.findByCategoria(categoria);

		Cupon cuponD = cuponList.get(0);

		Optional<Cupon> cuponData = Optional.ofNullable(cuponD);

		if (cuponData.isPresent()) {

			Cupon cupAux = cuponData.get();

			cupAux.setCategoria(cupon.getCategoria());
			cupAux.setRequisito(cupon.getRequisito());
			cupAux.setUbicacion(cupon.getUbicacion());
			cupAux.setNumerocontacto(cupon.getNumerocontacto());

			return new ResponseEntity<>(cuponRepository.save(cupAux), HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}

	}

	@DeleteMapping("/cupon/{categoria}")
	public ResponseEntity<HttpStatus> deleteCupon(@PathVariable("categoria") String categoria) {
		try {

			cuponRepository.deleteByCategoria(categoria);
			return new ResponseEntity<>(HttpStatus.OK);

		} catch (Exception e) {

			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@DeleteMapping("/cupon")
	public ResponseEntity<HttpStatus> deleteAllCupons() {
		try {
			cuponRepository.deleteAll();
			return new ResponseEntity<>(HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

}