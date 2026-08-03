package io.github.gustavotrinchao.codehire.dto.response;

import java.util.UUID;

public record ResponseQuestionOptionDto(

    UUID id,
    String content,
    boolean correct

) {}
