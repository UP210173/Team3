package com.example.P02.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.P02.model.Autor;

public interface AutorRepository extends JpaRepository<Autor,Long>{
    
}