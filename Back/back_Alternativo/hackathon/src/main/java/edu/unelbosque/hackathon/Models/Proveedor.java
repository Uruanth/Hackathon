package edu.unelbosque.hackathon.Models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "proveedor")
public class Proveedor {

    @Id
    private String id;

    //Nombre , codigo, ubicacion, disponibilidad de envío, abierto desde, abierto hasta,
    private String nombre;
    private String codigo;
    private String ubicacion;
    private String disponibilidadEnvio;
    private String abiertoDesde;
    private String abiertoHasta;

    public Proveedor() {
    }

    public Proveedor(String nombre, String codigo, String ubicacion, String disponibilidadEnvio, String abiertoDesde, String abiertoHasta) {
        this.id = id;
        this.nombre = nombre;
        this.codigo = codigo;
        this.ubicacion = ubicacion;
        this.disponibilidadEnvio = disponibilidadEnvio;
        this.abiertoDesde = abiertoDesde;
        this.abiertoHasta = abiertoHasta;
    }

    @Override
    public String toString() {
        return "Proveedor{" +
                "id='" + id + '\'' +
                ", nombre='" + nombre + '\'' +
                ", codigo='" + codigo + '\'' +
                ", ubicacion='" + ubicacion + '\'' +
                ", disponibilidadEnvio='" + disponibilidadEnvio + '\'' +
                ", abiertoDesde='" + abiertoDesde + '\'' +
                ", abiertoHasta='" + abiertoHasta + '\'' +
                '}';
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getCodigo() {
        return codigo;
    }

    public void setCodigo(String codigo) {
        this.codigo = codigo;
    }

    public String getUbicacion() {
        return ubicacion;
    }

    public void setUbicacion(String ubicacion) {
        this.ubicacion = ubicacion;
    }

    public String getDisponibilidadEnvio() {
        return disponibilidadEnvio;
    }

    public void setDisponibilidadEnvio(String disponibilidadEnvio) {
        this.disponibilidadEnvio = disponibilidadEnvio;
    }

    public String getAbiertoDesde() {
        return abiertoDesde;
    }

    public void setAbiertoDesde(String abiertoDesde) {
        this.abiertoDesde = abiertoDesde;
    }

    public String getAbiertoHasta() {
        return abiertoHasta;
    }

    public void setAbiertoHasta(String abiertoHasta) {
        this.abiertoHasta = abiertoHasta;
    }
}
