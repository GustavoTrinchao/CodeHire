package io.github.gustavotrinchao.codehire.controller;

import io.github.gustavotrinchao.codehire.dto.CreateUserDto;
import io.github.gustavotrinchao.codehire.dto.UserDto;
import io.github.gustavotrinchao.codehire.dto.UserResponseDto;
import io.github.gustavotrinchao.codehire.exception.EmailAlreadyExistsException;
import io.github.gustavotrinchao.codehire.model.User;
import io.github.gustavotrinchao.codehire.service.UserService;
import jakarta.persistence.EntityNotFoundException;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/users")
@RequiredArgsConstructor
public class UserController {
    @Autowired
    private UserService userService;

    @PostMapping
    public ResponseEntity<UserResponseDto> create(
            @Valid @RequestBody CreateUserDto dto) {

        UserResponseDto user = userService.create(dto);

        return ResponseEntity.status(HttpStatus.CREATED)
                .body(user);
    }

    @GetMapping("/getAll")
    public ResponseEntity<List<UserDto>> findAllUsers() {
        List<UserDto> users = userService.findAllUsers();
        return ResponseEntity.ok(users);
    }
}
