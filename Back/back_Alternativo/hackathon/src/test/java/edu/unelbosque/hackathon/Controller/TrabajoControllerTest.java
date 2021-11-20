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

import edu.unelbosque.hackathon.Models.Proveedor;
import edu.unelbosque.hackathon.Models.Trabajo;
import edu.unelbosque.hackathon.Repository.PorveedorRepository;
import edu.unelbosque.hackathon.Repository.TrabajoRepository;


@ExtendWith(SpringExtension.class)
@WebMvcTest(TrabajoController.class)
public class TrabajoControllerTest {
	
	@Autowired
	MockMvc mockMvc;
	
	@Autowired
	TrabajoController trabajo;
	
	@Autowired
    TrabajoRepository trabajoRepository;
	
	@MockBean
	TrabajoRepository repository;
	
	/*
	 *   private String categoria;
	    private String requisito;
	    private String ubicacion;
	    private String numerocontacto;
	    private String bonificacion;
	 */
	
	/**
	 * This Test Case evaluates if the method find all the suppliers
	 * @throws Exception
	 */
	@Test
	public void ListTrabajoTest() throws Exception {
		
		when(repository.findAll()).thenReturn(Stream.of(new Trabajo("1", "si", "Calle 33", "322135678", "si"))
				.collect(Collectors.toList()));
		ResponseEntity<List<Trabajo>> listTrabajo = trabajo.getAllTrabajos(null);
		Assertions.assertEquals(200, listTrabajo.getStatusCodeValue());
		
	}
	
	/**
	 * This Test Case evaluates if the supplier is created in the database
	 * @throws Exception
	 */
	@Test
	public void CrearTrabajoTest() throws Exception {
		Trabajo nuevoTrabajo =new Trabajo("1", "si", "Calle 33", "322135678", "si");
		when(repository.save(nuevoTrabajo)).thenReturn(nuevoTrabajo);
		ResponseEntity<Trabajo> trabajoCreado = trabajo.crearTrabajo(nuevoTrabajo);
		Assertions.assertEquals(200, trabajoCreado.getStatusCodeValue());
		
	}
	
	/**
	 * This Test Case evaluates if the method allows to search a supplier by code
	 * @throws Exception
	 */
	@Test
	public void BuscarProveedoresTest() throws Exception {
		
		String categoria = "1";
		when(repository.findByCategoria(categoria)).thenReturn(Stream.of(new Trabajo("1", "si", "Calle 33", "322135678", "si"))
				.collect(Collectors.toList()));
		ResponseEntity<List<Trabajo>> trabajoEncontrado = trabajo.getTrabajoByCategoria(categoria);
		Assertions.assertEquals(200, trabajoEncontrado.getStatusCodeValue());
		
	}
	
	/**
	 * This Test Case evaluate if the method delete a supplier by code
	 * @throws Exception
	 */
	@Test
	public void EliminarTrabajoTest() throws Exception {
		Trabajo nuevoTrabajo = new Trabajo("1", "si", "Calle 33", "322135678", "si");
		String categoria = "1";
		trabajo.deleteTrabajo(categoria);
		verify(repository,times(1)).deleteByCategoria(categoria);
		ResponseEntity<HttpStatus> proveedorEliminado = trabajo.deleteTrabajo(categoria);
		Assertions.assertEquals(200, proveedorEliminado.getStatusCodeValue());
		
	}
	
	/**
	 * This Test Case evaluate if the method delete a all the suppliers
	 * @throws Exception
	 */
	@Test
	public void EliminarTodosTrabajosTest() throws Exception {
		trabajo.deleteAllTrabajos();
		verify(repository,times(1)).deleteAll();;
		ResponseEntity<HttpStatus> trabajoEliminado = trabajo.deleteAllTrabajos();
		Assertions.assertEquals(200, trabajoEliminado.getStatusCodeValue());
		
	}
	
	
}

