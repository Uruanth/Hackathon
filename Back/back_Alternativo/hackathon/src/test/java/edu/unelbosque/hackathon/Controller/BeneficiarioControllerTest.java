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

import edu.unelbosque.hackathon.Models.Beneficiario;
import edu.unelbosque.hackathon.Models.Proveedor;
import edu.unelbosque.hackathon.Repository.BeneficiarioRepository;
import edu.unelbosque.hackathon.Repository.PorveedorRepository;


@ExtendWith(SpringExtension.class)
@WebMvcTest(BeneficiarioController.class)
public class BeneficiarioControllerTest {
	
	@Autowired
	MockMvc mockMvc;
	
	@Autowired
	BeneficiarioController beneficiario;
	
	@Autowired
    BeneficiarioRepository beneficiarioRepository;
	
	@MockBean
	BeneficiarioRepository repository;
	
	/**
	 * This Test Case evaluates if the method find all the suppliers
	 * @throws Exception
	 */
	@Test
	public void ListBeneficiarioTest() throws Exception {
		
		when(repository.findAll()).thenReturn(Stream.of(new Beneficiario("Fundación Luz", "1", 100, 30 , "texto", "texto", "texto"))
				.collect(Collectors.toList()));
		ResponseEntity<List<Beneficiario>> listBeneficiario = beneficiario.getAllBeneficiarios(null);
		Assertions.assertEquals(200, listBeneficiario.getStatusCodeValue());
		
	}
	
	/**
	 * This Test Case evaluates if the supplier is created in the database
	 * @throws Exception
	 */
	@Test
	public void CrearBeneficiarioTest() throws Exception {
		Beneficiario nuevoBeneficiario = new Beneficiario("Fundación Luz", "1", 100, 30 , "texto", "texto", "texto");
		when(repository.save(nuevoBeneficiario)).thenReturn(nuevoBeneficiario);
		ResponseEntity<Beneficiario> beneficiarioCreado = beneficiario.crearBeneficiario(nuevoBeneficiario);
		Assertions.assertEquals(200, beneficiarioCreado.getStatusCodeValue());
		
	}
	
	/**
	 * This Test Case evaluates if the method allows to search a supplier by code
	 * @throws Exception
	 */
	@Test
	public void BuscarBeneficiarioTest() throws Exception {
		
		String codigo = "1";
		when(repository.findByCodigo(codigo)).thenReturn(Stream.of(new Beneficiario("Fundación Luz", "1", 100, 30 , "texto", "texto", "texto"))
				.collect(Collectors.toList()));
		ResponseEntity<List<Beneficiario>> beneficiarioEncontrado = beneficiario.getBeneficiarioByCode(codigo);
		Assertions.assertEquals(200, beneficiarioEncontrado.getStatusCodeValue());
		
	}
	
	/**
	 * This Test Case evaluate if the method delete a supplier by code
	 * @throws Exception
	 */
	@Test
	public void EliminarBeneficiarioTest() throws Exception {
		Beneficiario nuevoProveedor = new Beneficiario("Fundación Luz", "1", 100, 30 , "texto", "texto", "texto");
		String codigo = "1";
		beneficiario.deleteBeneficiario(codigo);
		verify(repository,times(1)).deleteByCodigo(codigo);
		ResponseEntity<HttpStatus> beneficiarioEliminado = beneficiario.deleteBeneficiario(codigo);
		Assertions.assertEquals(200, beneficiarioEliminado.getStatusCodeValue());
		
	}
	
	/**
	 * This Test Case evaluate if the method delete a all the suppliers
	 * @throws Exception
	 */
	@Test
	public void EliminarTodosBeneficiariosTest() throws Exception {
		beneficiario.deleteAllBeneficiario();
		verify(repository,times(1)).deleteAll();;
		ResponseEntity<HttpStatus> beneficiarioEliminado = beneficiario.deleteAllBeneficiario();
		Assertions.assertEquals(200, beneficiarioEliminado.getStatusCodeValue());
		
	}
	
	
}
