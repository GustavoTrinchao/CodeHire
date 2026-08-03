package io.github.gustavotrinchao.codehire.dto.response;

import io.github.gustavotrinchao.codehire.enums.ERole;

import java.util.UUID;

public record UserResponseDto(
    UUID id,
    String email,
    String name,
    String company,
    ERole role
){}