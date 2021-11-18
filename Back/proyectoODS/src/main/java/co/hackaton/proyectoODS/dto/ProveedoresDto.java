package co.hackaton.proyectoODS.dto;

public class ProveedoresDto {
	
	private String codigoProveedor;
	private String nombreProveedor;
	private String ubicacionProveedor;
	private String horarioProveedor;
	private String envioProveedor;
	
	
	public String getCodigoProveedor() {
		return codigoProveedor;
	}


	public void setCodigoProveedor(String codigoProveedor) {
		this.codigoProveedor = codigoProveedor;
	}


	public String getNombreProveedor() {
		return nombreProveedor;
	}


	public void setNombreProveedor(String nombreProveedor) {
		this.nombreProveedor = nombreProveedor;
	}


	public String getUbicacionProveedor() {
		return ubicacionProveedor;
	}


	public void setUbicacionProveedor(String ubicacionProveedor) {
		this.ubicacionProveedor = ubicacionProveedor;
	}


	public String getHorarioProveedor() {
		return horarioProveedor;
	}


	public void setHorarioProveedor(String horarioProveedor) {
		this.horarioProveedor = horarioProveedor;
	}


	public String getEnvioProveedor() {
		return envioProveedor;
	}


	public void setEnvioProveedor(String envioProveedor) {
		this.envioProveedor = envioProveedor;
	}


	public ProveedoresDto() {
		
	}


	public ProveedoresDto(String codigoProveedor, String nombreProveedor, String ubicacionProveedor,
			String horarioProveedor, String envioProveedor) {
		this.codigoProveedor = codigoProveedor;
		this.nombreProveedor = nombreProveedor;
		this.ubicacionProveedor = ubicacionProveedor;
		this.horarioProveedor = horarioProveedor;
		this.envioProveedor = envioProveedor;
	}
	
	
	

}
