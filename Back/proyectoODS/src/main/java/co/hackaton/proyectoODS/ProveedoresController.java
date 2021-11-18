package co.hackaton.proyectoODS;

import java.util.ArrayList;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import co.hackaton.proyectoODS.dao.ProveedoresDao;
import co.hackaton.proyectoODS.dto.ProveedoresDto;

@CrossOrigin(origins = "http://localhost:8080")
@RestController
public class ProveedoresController {
	
	@RequestMapping("/crearProveedor")
	public boolean crearProveedor(@RequestBody ProveedoresDto proveedoresDto) {
		boolean estado = false;
		ProveedoresDao proveedores = new ProveedoresDao();
		estado = proveedores.crear(proveedoresDto);
		return estado;
	}
	
	@RequestMapping("/listarProveedores")
	public ArrayList<ProveedoresDto> listarProveedores() {
		ArrayList<ProveedoresDto> listado;
		ProveedoresDao proveedores = new ProveedoresDao();
		listado = proveedores.listar();
		return listado;
	}
	
	@DeleteMapping("/eliminarProveedor/{codigoProveedor}")
	public boolean eliminarProveedor(@PathVariable("codigoProveedor") String codigoProveedor) {
		boolean rta = false;
		ProveedoresDao proveedores = new ProveedoresDao();
		rta = proveedores.eliminar(codigoProveedor);
		return rta;
	}
	
	@RequestMapping("/buscarProveedor/{codigoProveedor}")
	public ArrayList<ProveedoresDto> buscarProveedor(@PathVariable("codigoProveedor") String codigoProveedor) {
		ArrayList<ProveedoresDto> listado;
		ProveedoresDao proveedores = new ProveedoresDao();
		listado = proveedores.buscarProveedor(codigoProveedor);
		return listado;
	}
	
	@RequestMapping("/actualizarProveedor")
	public boolean actualizarProveedor(@RequestBody ProveedoresDto proveedoresDto) {
		boolean estado = false;
		ProveedoresDao proveedores = new ProveedoresDao();
		estado = proveedores.actualizar(proveedoresDto);
		return estado;
	}
}

