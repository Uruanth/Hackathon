package edu.unelbosque.hackathon.Models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "cupones")
public class Cupon {
	
	@Id
	private String id;
	
	private String categoria;
	private String requisito;
	private String ubicacion;
	private String numerocontacto;
	
	@Override
    public String toString() {
        return "Cupon{" +

                ", categoria='" + categoria + '\'' +
                ", requisito='" + requisito + '\'' +
                ", ubicacion=" + ubicacion +
                ", numerocontacto=" + numerocontacto +'\'' +
                '}';
    }

	/**
	 * @param categoria
	 * @param requisito
	 * @param ubicacion
	 * @param numerocontacto
	 */
	public Cupon(String categoria, String requisito, String ubicacion, String numerocontacto) {
		super();
		this.categoria = categoria;
		this.requisito = requisito;
		this.ubicacion = ubicacion;
		this.numerocontacto = numerocontacto;
	}
	
	public Cupon() {
		
	}

	/**
	 * @return the id
	 */
	public String getId() {
		return id;
	}

	/**
	 * @param id the id to set
	 */
	public void setId(String id) {
		this.id = id;
	}

	/**
	 * @return the categoria
	 */
	public String getCategoria() {
		return categoria;
	}

	/**
	 * @param categoria the categoria to set
	 */
	public void setCategoria(String categoria) {
		this.categoria = categoria;
	}

	/**
	 * @return the requisito
	 */
	public String getRequisito() {
		return requisito;
	}

	/**
	 * @param requisito the requisito to set
	 */
	public void setRequisito(String requisito) {
		this.requisito = requisito;
	}

	/**
	 * @return the ubicacion
	 */
	public String getUbicacion() {
		return ubicacion;
	}

	/**
	 * @param ubicacion the ubicacion to set
	 */
	public void setUbicacion(String ubicacion) {
		this.ubicacion = ubicacion;
	}

	/**
	 * @return the numerocontacto
	 */
	public String getNumerocontacto() {
		return numerocontacto;
	}

	/**
	 * @param numerocontacto the numerocontacto to set
	 */
	public void setNumerocontacto(String numerocontacto) {
		this.numerocontacto = numerocontacto;
	}	
}
