package io.github.gustavotrinchao.codehire.dto.response;

import io.github.gustavotrinchao.codehire.enums.ERole;
import java.time.LocalDateTime;
import java.util.UUID;

public record UserDto(

    UUID id,
    String email,
    String name,
    ERole role,
    LocalDateTime createdAt,
    LocalDateTime updatedAt

){}