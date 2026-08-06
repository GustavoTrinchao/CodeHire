package io.github.gustavotrinchao.codehire.dto.response;

public record LoginResponseDto(
    String token,
    UserResponseDto user
){}