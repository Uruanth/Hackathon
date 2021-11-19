package edu.unelbosque.hackathon.Models;


import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "alimentos")
public class Alimento {

    @Id
    private String id;


    private String codigo;
    private String nombre;
    private String fechaVencimiento;
    private String tipo;


    @Override
    public String toString() {
        return "Alimento{" +
                "id='" + id + '\'' +
                ", codigo='" + codigo + '\'' +
                ", nombre='" + nombre + '\'' +
                ", fechaVencimiento='" + fechaVencimiento + '\'' +
                ", tipo='" + tipo + '\'' +
                '}';
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getCodigo() {
        return codigo;
    }

    public void setCodigo(String codigo) {
        this.codigo = codigo;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getFechaVencimiento() {
        return fechaVencimiento;
    }

    public void setFechaVencimiento(String fechaVencimiento) {
        this.fechaVencimiento = fechaVencimiento;
    }

    public String getTipo() {
        return tipo;
    }

    public void setTipo(String tipo) {
        this.tipo = tipo;
    }

    public Alimento() {
    }

    public Alimento(String codigo, String nombre, String fechaVencimiento, String tipo) {
        this.id = id;
        this.codigo = codigo;
        this.nombre = nombre;
        this.fechaVencimiento = fechaVencimiento;
        this.tipo = tipo;
    }
}
