package edu.unelbosque.hackathon.Controller;

import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.test.web.servlet.MockMvc;

import edu.unelbosque.hackathon.Models.Cupon;
import edu.unelbosque.hackathon.Models.Proveedor;
import edu.unelbosque.hackathon.Repository.CuponRepository;
import edu.unelbosque.hackathon.Repository.PorveedorRepository;


@ExtendWith(SpringExtension.class)
@WebMvcTest(CuponController.class)
public class CuponControllerTest {
	
	@Autowired
	MockMvc mockMvc;
	
	@Autowired
	CuponController cupon;
	
	@Autowired
    CuponRepository cuponRepository;
	
	@MockBean
	CuponRepository repository;
	
	/*
	 * private String categoria;
	private String requisito;
	private String ubicacion;
	private String numerocontacto;
	 */
	
	/**
	 * This Test Case evaluates if the method find all the cupons
	 * @throws Exception
	 */
	@Test
	public void ListCuponTest() throws Exception {
		
		when(repository.findAll()).thenReturn(Stream.of(new Cupon("1", "1", "Calle 33", "3018976543"))
				.collect(Collectors.toList()));
		ResponseEntity<List<Cupon>> listCupon = cupon.getAllCupones(null);
		Assertions.assertEquals(200, listCupon.getStatusCodeValue());
		
	}
	
	/**
	 * This Test Case evaluates if the cupon was created in the database
	 * @throws Exception
	 */
	@Test
	public void CrearCuponTest() throws Exception {
		Cupon nuevoCupon = new Cupon("1", "1", "Calle 33", "3018976543");
		when(repository.save(nuevoCupon)).thenReturn(nuevoCupon);
		ResponseEntity<Cupon> cuponCreado = cupon.crearCupon(nuevoCupon);
		Assertions.assertEquals(200, cuponCreado.getStatusCodeValue());
		
	}
	
	/**
	 * This Test Case evaluates if the method allows to search a cupon by category
	 * @throws Exception
	 */
	@Test
	public void BuscarCuponTest() throws Exception {
		
		String categoria = "1";
		when(repository.findByCategoria(categoria)).thenReturn(Stream.of(new Cupon("1", "1", "Calle 33", "3018976543"))
				.collect(Collectors.toList()));
		ResponseEntity<List<Cupon>> cuponEncontrado = cupon.getCuponByCategoria(categoria);
		Assertions.assertEquals(200, cuponEncontrado.getStatusCodeValue());
		
	}
	
	/**
	 * This Test Case evaluate if the method delete a cupon by category
	 * @throws Exception
	 */
	@Test
	public void EliminarProveedoresTest() throws Exception {
		Cupon nuevoCupon = new Cupon("1", "1", "Calle 33", "3018976543");
		String categoria = "1";
		cupon.deleteCupon(categoria);
		verify(repository,times(1)).deleteByCategoria(categoria);
		ResponseEntity<HttpStatus> cuponEliminado = cupon.deleteCupon(categoria);
		Assertions.assertEquals(200, cuponEliminado.getStatusCodeValue());
		
	}
	
	/**
	 * This Test Case evaluate if the method delete all the cupons
	 * @throws Exception
	 */
	@Test
	public void EliminarTodosCuponesTest() throws Exception {
		cupon.deleteAllCupons();
		verify(repository,times(1)).deleteAll();;
		ResponseEntity<HttpStatus> cuponEliminado = cupon.deleteAllCupons();
		Assertions.assertEquals(200, cuponEliminado.getStatusCodeValue());
		
	}
	
	
}

