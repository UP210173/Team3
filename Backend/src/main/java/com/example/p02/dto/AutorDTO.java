package com.example.p02.dto;

import lombok.Data;
import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonFormat;

@Data
public class AutorDTO {
    private Long idAutor;
    private String nombre;
    private String email;
    
    @JsonFormat(pattern = "yyyy-MM-dd")
    private LocalDate fechaNacimiento; 

}
