package edu.unelbosque.hackathon.Models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;


@Document(collection = "beneficiario")
public class Beneficiario {

    @Id
    private String id;

    private String nombre;
    private String codigo;
    private int personasACargo;
    private int edades;
    private String requisitosNutricionales;
    private String motivoSolicitud;
    private String usoEstimado;

    @Override
    public String toString() {
        return "Beneficiario{" +

                ", nombre='" + nombre + '\'' +
                ", codigo='" + codigo + '\'' +
                ", personasACargo=" + personasACargo +
                ", edades=" + edades +
                ", requisitosNutricionales='" + requisitosNutricionales + '\'' +
                ", motivoSolicitud='" + motivoSolicitud + '\'' +
                ", usoEstimado='" + usoEstimado + '\'' +
                '}';
    }

    public Beneficiario(String nombre, String codigo, int personasACargo, int edades, String requisitosNutricionales, String motivoSolicitud, String usoEstimado) {
        this.id =id;
        this.nombre = nombre;
        this.codigo = codigo;
        this.personasACargo = personasACargo;
        this.edades = edades;
        this.requisitosNutricionales = requisitosNutricionales;
        this.motivoSolicitud = motivoSolicitud;
        this.usoEstimado = usoEstimado;
    }

    public Beneficiario() {
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

    public int getPersonasACargo() {
        return personasACargo;
    }

    public void setPersonasACargo(int personasACargo) {
        this.personasACargo = personasACargo;
    }

    public int getEdades() {
        return edades;
    }

    public void setEdades(int edades) {
        this.edades = edades;
    }

    public String getRequisitosNutricionales() {
        return requisitosNutricionales;
    }

    public void setRequisitosNutricionales(String requisitosNutricionales) {
        this.requisitosNutricionales = requisitosNutricionales;
    }

    public String getMotivoSolicitud() {
        return motivoSolicitud;
    }

    public void setMotivoSolicitud(String motivoSolicitud) {
        this.motivoSolicitud = motivoSolicitud;
    }

    public String getUsoEstimado() {
        return usoEstimado;
    }

    public void setUsoEstimado(String usoEstimado) {
        this.usoEstimado = usoEstimado;
    }
}
