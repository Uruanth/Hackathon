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

import edu.unelbosque.hackathon.Models.Alimento;
import edu.unelbosque.hackathon.Models.Proveedor;
import edu.unelbosque.hackathon.Repository.AlimentoRepository;
import edu.unelbosque.hackathon.Repository.PorveedorRepository;

@ExtendWith(SpringExtension.class)
@WebMvcTest(AlimentoController.class)
public class AlimentoControllerTest {
	
	@Autowired
	MockMvc mockMvc;
	
	@Autowired
	AlimentoController alimento;
	
	@Autowired
    AlimentoRepository alimentoRepository;
	
	@MockBean
	AlimentoRepository repository;
	
	/**
	 * This Test Case evaluates if the method find all the food
	 * @throws Exception
	 */
	@Test
	public void ListAlimentoTest() throws Exception {
		
		when(repository.findAll()).thenReturn(Stream.of(new Alimento("10", "Manzana", "23/11/2021", "perecedero"))
				.collect(Collectors.toList()));
		ResponseEntity<List<Alimento>> listAlimento = alimento.getAllAlimento(null);
		Assertions.assertEquals(200, listAlimento.getStatusCodeValue());
		
	}
	
	/**
	 * This Test Case evaluates if the food is created in the database
	 * @throws Exception
	 */
	@Test
	public void CrearAlimentoTest() throws Exception {
		Alimento nuevoAlimento = new Alimento("10", "Manzana", "23/11/2021", "perecedero");
		when(repository.save(nuevoAlimento)).thenReturn(nuevoAlimento);
		ResponseEntity<Alimento> alimentoCreado = alimento.crearAlimento(nuevoAlimento);
		Assertions.assertEquals(200, alimentoCreado.getStatusCodeValue());
		
	}
	
	/**
	 * This Test Case evaluates if the method allows to search food by code
	 * @throws Exception
	 */
	@Test
	public void BuscarAlimentoTest() throws Exception {
		
		String codigo = "1";
		when(repository.findByCodigo(codigo)).thenReturn(Stream.of(new Alimento("10", "Manzana", "23/11/2021", "perecedero"))
				.collect(Collectors.toList()));
		ResponseEntity<List<Alimento>> alimentoEncontrado = alimento.getAlimentoByCode(codigo);
		Assertions.assertEquals(200, alimentoEncontrado.getStatusCodeValue());
		
	}
	
	/**
	 * This Test Case evaluate if the method delete food by code
	 * @throws Exception
	 */
	@Test
	public void EliminarAlimentoTest() throws Exception {
		Alimento nuevoAlimento = new Alimento("10", "Manzana", "23/11/2021", "perecedero");
		String codigo = "1";
		alimento.deleteAlimento(codigo);
		verify(repository,times(1)).deleteByCodigo(codigo);
		ResponseEntity<HttpStatus> alimentoEliminado = alimento.deleteAlimento(codigo);
		Assertions.assertEquals(200, alimentoEliminado.getStatusCodeValue());
		
	}
	
	/**
	 * This Test Case evaluate if the method delete a all the food
	 * @throws Exception
	 */
	@Test
	public void EliminarTodosAlimentosTest() throws Exception {
		alimento.deleteAllAlimentos();
		verify(repository,times(1)).deleteAll();;
		ResponseEntity<HttpStatus> alimentoEliminado = alimento.deleteAllAlimentos();
		Assertions.assertEquals(200, alimentoEliminado.getStatusCodeValue());
		
	}
	
	
}

