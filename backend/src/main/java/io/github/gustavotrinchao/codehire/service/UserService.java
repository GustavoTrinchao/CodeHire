package io.github.gustavotrinchao.codehire.service;

import io.github.gustavotrinchao.codehire.dto.request.CreateUserDto;
import io.github.gustavotrinchao.codehire.dto.request.LoginRequestDto;
import io.github.gustavotrinchao.codehire.dto.response.LoginResponseDto;
import io.github.gustavotrinchao.codehire.dto.response.UserDto;
import io.github.gustavotrinchao.codehire.exception.EmailAlreadyExistsException;
import io.github.gustavotrinchao.codehire.exception.InvalidCredentialsException;
import io.github.gustavotrinchao.codehire.mapper.UserMapper;
import io.github.gustavotrinchao.codehire.model.User;
import io.github.gustavotrinchao.codehire.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class UserService {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final UserMapper userMapper;
    private final AuthenticationManager authenticationManager;
    private final JwtTokenService jwtTokenService;

    public void create(CreateUserDto dto) {
        if (userRepository.existsByEmail(dto.email())) {
            throw new EmailAlreadyExistsException(
                    "Email already registered."
            );
        }
        User user = userMapper.toEntity(dto);
        user.setPassword(passwordEncoder.encode(dto.password()));
        userRepository.save(user);
    }

    public List<UserDto> findAllUsers() {
        return userRepository.findAll()
                .stream()
                .map(userMapper::toDto)
                .toList();
    }

    public LoginResponseDto authenticateUser(LoginRequestDto loginUserDto) {
        UsernamePasswordAuthenticationToken usernamePasswordAuthenticationToken =
                new UsernamePasswordAuthenticationToken(loginUserDto.email(), loginUserDto.password());

        try {
            Authentication authentication = authenticationManager.authenticate(usernamePasswordAuthenticationToken);
            User userDetails = (User) authentication.getPrincipal();
            String token = jwtTokenService.generateToken(userDetails);

            return userMapper.toResponse(userDetails,token);
        } catch (BadCredentialsException e) {
            throw new InvalidCredentialsException();
        }
    }
}
