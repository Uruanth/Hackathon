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
import org.junit.runner.RunWith;
import org.junit.runners.Suite;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.test.web.servlet.MockMvc;

import edu.unelbosque.hackathon.Models.Proveedor;
import edu.unelbosque.hackathon.Repository.PorveedorRepository;


@ExtendWith(SpringExtension.class)
@WebMvcTest(ProveedorController.class)
public class ProveedorControllerTest {
	
	@Autowired
	MockMvc mockMvc;
	
	@Autowired
	ProveedorController proveedor;
	
	@Autowired
    PorveedorRepository proveedorRepository;
	
	@MockBean
	PorveedorRepository repository;
	
	/**
	 * This Test Case evaluates if the method find all the suppliers
	 * @throws Exception
	 */
	@Test
	public void ListProveedoresTest() throws Exception {
		when(repository.findAll()).thenReturn(Stream.of(new Proveedor("Proveedor1", "1", "Calle 33", "si", "8am", "3pm"))
				.collect(Collectors.toList()));
		ResponseEntity<List<Proveedor>> listProveedores = proveedor.getAllProveedors(null);
		Assertions.assertEquals(200, listProveedores.getStatusCodeValue());
		
	}
	
	/**
	 * This Test Case evaluates if the supplier is created in the database
	 * @throws Exception
	 */
	@Test
	public void CrearProveedoresTest() throws Exception {
		Proveedor nuevoProveedor = new Proveedor("Proveedor2", "2", "Calle 27", "si", "9am", "10pm");
		when(repository.save(nuevoProveedor)).thenReturn(nuevoProveedor);
		ResponseEntity<Proveedor> proveedorCreado = proveedor.crearProveedor(nuevoProveedor);
		Assertions.assertEquals(200, proveedorCreado.getStatusCodeValue());
		
	}
	
	/**
	 * This Test Case evaluates if the method allows to search a supplier by code
	 * @throws Exception
	 */
	@Test
	public void BuscarProveedoresTest() throws Exception {
		
		String codigo = "1";
		when(repository.findByCodigo(codigo)).thenReturn(Stream.of(new Proveedor("Proveedor1", "1", "Calle 33", "si", "8am", "3pm"))
				.collect(Collectors.toList()));
		ResponseEntity<List<Proveedor>> proveedorEncontrado = proveedor.getProveedorByCode(codigo);
		Assertions.assertEquals(200, proveedorEncontrado.getStatusCodeValue());
		
	}
	
	/**
	 * This Test Case evaluate if the method delete a supplier by code
	 * @throws Exception
	 */
	@Test
	public void EliminarProveedoresTest() throws Exception {
		Proveedor nuevoProveedor = new Proveedor("Proveedor2", "2", "Calle 27", "si", "9am", "10pm");
		String codigo = "1";
		proveedor.deleteProveedor(codigo);
		verify(repository,times(1)).deleteByCodigo(codigo);
		ResponseEntity<HttpStatus> proveedorEliminado = proveedor.deleteProveedor(codigo);
		Assertions.assertEquals(200, proveedorEliminado.getStatusCodeValue());
		
	}
	
	/**
	 * This Test Case evaluate if the method delete a all the suppliers
	 * @throws Exception
	 */
	@Test
	public void EliminarTodosProveedoresTest() throws Exception {
		proveedor.deleteAllProveedor();
		verify(repository,times(1)).deleteAll();;
		ResponseEntity<HttpStatus> proveedorEliminado = proveedor.deleteAllProveedor();
		Assertions.assertEquals(200, proveedorEliminado.getStatusCodeValue());
		
	}
	
	
}
