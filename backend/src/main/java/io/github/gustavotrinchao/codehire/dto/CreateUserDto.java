package io.github.gustavotrinchao.codehire.dto;

import io.github.gustavotrinchao.codehire.enums.ERole;
import jakarta.validation.constraints.*;

public record CreateUserDto(
    @NotBlank(message = "Email cannot be blank")
    @Email(message = "Invalid email format")
    String email,

    @NotNull(message = "Password cannot be null")
    @Size(min = 6, max = 50, message = "Password must be between 6 and 50 characters")
    String password,

    @NotBlank(message = "Name cannot be blank")
    @Size(min = 3, max = 100, message = "Name must be between 3 and 100 characters")
    String name,

    @Size(min = 3, max = 100, message = "Company must be between 3 and 100 characters")
    String company,

    @NotNull(message = "User role is required")
    ERole role
) {}
