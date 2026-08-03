package io.github.gustavotrinchao.codehire.controller;

import io.github.gustavotrinchao.codehire.dto.request.LoginRequestDto;
import io.github.gustavotrinchao.codehire.dto.response.LoginResponseDto;
import io.github.gustavotrinchao.codehire.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
public class AuthController {

    private final UserService userService;

    @PostMapping("/login")
    public ResponseEntity<LoginResponseDto> login(@RequestBody LoginRequestDto dto) {
        LoginResponseDto response = userService.authenticateUser(dto);

        return ResponseEntity.ok(response);
    }
}
