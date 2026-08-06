package io.github.gustavotrinchao.codehire.dto.request;

import io.github.gustavotrinchao.codehire.enums.EQuestionDifficulty;
import io.github.gustavotrinchao.codehire.enums.EQuestionType;
import jakarta.persistence.Column;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import org.hibernate.annotations.JdbcTypeCode;
import org.hibernate.type.SqlTypes;

import java.util.List;

public record CreateQuestionDto(
    @NotBlank(message = "Title cannot be blank")
    @Size(max = 50, message = "Title must have less than 50 characters")
    String title,

    @Size(max = 1000, message = "Description must have less than 1000 characters")
    String description,

    @NotNull(message = "Question type is required")
    EQuestionType type,

    @NotNull(message = "Question difficulty is required")
    EQuestionDifficulty difficulty,

    @JdbcTypeCode(SqlTypes.JSON)
    @Column(columnDefinition = "jsonb")
    List<String> tags,

    List<CreateQuestionOptionDto> options,

    String starterCode
) {}
