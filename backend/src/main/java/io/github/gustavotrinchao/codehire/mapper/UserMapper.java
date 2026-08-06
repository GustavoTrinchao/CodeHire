package io.github.gustavotrinchao.codehire.mapper;

import io.github.gustavotrinchao.codehire.dto.request.CreateUserDto;
import io.github.gustavotrinchao.codehire.dto.response.LoginResponseDto;
import io.github.gustavotrinchao.codehire.dto.response.UserDto;
import io.github.gustavotrinchao.codehire.dto.response.UserResponseDto;
import io.github.gustavotrinchao.codehire.model.User;
import org.springframework.stereotype.Component;

@Component
public class UserMapper {

    public UserResponseDto toResponse(User user) {
        return new UserResponseDto(
            user.getId(),
            user.getEmail(),
            user.getName(),
            user.getCompany(),
            user.getRole()
        );
    }

    public User toEntity(CreateUserDto dto) {
        User user = new User();

        user.setEmail(dto.email());
        user.setName(dto.name());
        user.setCompany(dto.company());
        user.setRole(dto.role());

        return user;
    }

    public UserDto toDto(User user) {
        return new UserDto(
            user.getId(),
            user.getEmail(),
            user.getName(),
            user.getRole(),
            user.getCreatedAt(),
            user.getUpdatedAt()
        );
    }
    public LoginResponseDto toResponse(User user, String token){
        return new LoginResponseDto(
            token,
            toResponse(user)
        );
    }
}