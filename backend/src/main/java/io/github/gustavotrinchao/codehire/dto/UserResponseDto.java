package io.github.gustavotrinchao.codehire.dto;

import io.github.gustavotrinchao.codehire.enums.ERole;
import io.github.gustavotrinchao.codehire.model.User;

import java.util.UUID;

public record UserResponseDto(
        UUID id,
        String email,
        String name,
        String company,
        ERole role
) {
    public static UserResponseDto fromEntity(User user) {
        return new UserResponseDto(
            user.getId(),
            user.getEmail(),
            user.getName(),
            user.getCompany(),
            user.getRole()
        );
    }
}