package io.github.gustavotrinchao.codehire.dto.request;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public record CreateQuestionOptionDto(
    @NotBlank(message = "Content cannot be blank")
    @Size(max = 200, message = "Content must have less than 200 characters")
    String content,

    boolean correct
) {}
