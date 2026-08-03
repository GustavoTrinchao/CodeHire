package io.github.gustavotrinchao.codehire.controller;

import io.github.gustavotrinchao.codehire.dto.request.CreateUserDto;
import io.github.gustavotrinchao.codehire.dto.response.UserDto;
import io.github.gustavotrinchao.codehire.dto.response.UserResponseDto;
import io.github.gustavotrinchao.codehire.service.UserService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/users")
@RequiredArgsConstructor
public class UserController {

    private final UserService userService;

    @GetMapping
    public ResponseEntity<List<UserDto>> findAllUsers() {
        List<UserDto> users = userService.findAllUsers();
        return ResponseEntity.ok(users);
    }
}
