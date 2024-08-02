package com.example.p02.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Named;
import org.mapstruct.NullValuePropertyMappingStrategy;
import org.mapstruct.InjectionStrategy;

import com.example.p02.dto.NoticeDTO;
import com.example.p02.model.Notice;

import java.util.List;

@Mapper(
  componentModel = "spring", 
  injectionStrategy = InjectionStrategy.CONSTRUCTOR, 
  nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE
)
public interface NoticeMapper {

  @Mapping(target = "someProperty", source = "someField") // Ajusta según sea necesario
  NoticeDTO toDTO(Notice model);

  @Named("noticesDTOList")
  default List<NoticeDTO> toNoticeDTOList(List<Notice> sourceList) {
    return sourceList
        .stream()
        .map(this::toDTO)
        .toList();
  }

}
