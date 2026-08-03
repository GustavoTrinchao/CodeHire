package io.github.gustavotrinchao.codehire.dto;

import io.github.gustavotrinchao.codehire.enums.ERole;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.time.LocalDateTime;
import java.util.UUID;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class UserDto{

    UUID id;
    String email;
    String name;
    ERole role;
    LocalDateTime createdAt;
    LocalDateTime updatedAt;

}