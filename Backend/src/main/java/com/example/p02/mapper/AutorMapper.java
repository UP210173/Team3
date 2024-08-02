package com.example.p02.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Named;
import org.mapstruct.NullValuePropertyMappingStrategy;
import org.mapstruct.InjectionStrategy;

import com.example.p02.dto.AutorDTO;
import com.example.p02.model.Autor;

import java.util.List;

@Mapper(
  componentModel = "spring", 
  injectionStrategy = InjectionStrategy.CONSTRUCTOR, 
  nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE
)
public interface AutorMapper {

  AutorDTO toDTO(Autor model);

  @Named("autoresDTOList")
  default List<AutorDTO> toAutorDtoList(List<Autor> sourceList) {
    return sourceList
        .stream()
        .map(this::toDTO)
        .toList();
  }
}
