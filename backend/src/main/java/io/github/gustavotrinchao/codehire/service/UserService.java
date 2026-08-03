package io.github.gustavotrinchao.codehire.service;

import io.github.gustavotrinchao.codehire.dto.CreateUserDto;
import io.github.gustavotrinchao.codehire.dto.UserDto;
import io.github.gustavotrinchao.codehire.dto.UserResponseDto;
import io.github.gustavotrinchao.codehire.exception.EmailAlreadyExistsException;
import io.github.gustavotrinchao.codehire.mapper.UserMapper;
import io.github.gustavotrinchao.codehire.model.User;
import io.github.gustavotrinchao.codehire.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class UserService {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final UserMapper userMapper;

    public UserResponseDto create(CreateUserDto dto) {
        if (userRepository.existsByEmail(dto.email())) {
            throw new EmailAlreadyExistsException(
                    "Email already registered."
            );
        }
        User user = userMapper.toEntity(dto);
        user.setPassword(passwordEncoder.encode(dto.password()));
        User savedUser = userRepository.save(user);

        return userMapper.toResponse(savedUser);
    }

    public List<UserDto> findAllUsers() {
        return userRepository.findAll()
                .stream()
                .map(userMapper::toDto)
                .toList();
    }
}
