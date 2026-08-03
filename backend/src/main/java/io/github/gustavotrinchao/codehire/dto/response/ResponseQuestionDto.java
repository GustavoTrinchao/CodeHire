package io.github.gustavotrinchao.codehire.dto.response;

import io.github.gustavotrinchao.codehire.enums.EQuestionType;

import java.util.List;
import java.util.UUID;

public record ResponseQuestionDto(

    UUID id,
    String title,
    String description,
    EQuestionType type,
    List<String> tags,
    List<ResponseQuestionOptionDto> options

) {}
