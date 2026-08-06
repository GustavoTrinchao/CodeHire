package io.github.gustavotrinchao.codehire.controller;

import io.github.gustavotrinchao.codehire.dto.request.CreateQuestionDto;
import io.github.gustavotrinchao.codehire.dto.response.ResponseQuestionDto;
import io.github.gustavotrinchao.codehire.model.Question;
import io.github.gustavotrinchao.codehire.model.User;
import io.github.gustavotrinchao.codehire.service.QuestionService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/questions")
@RequiredArgsConstructor
public class QuestionController {

    private final QuestionService questionService;

    @PostMapping
    public ResponseEntity<UUID> create(
            @Valid @RequestBody CreateQuestionDto dto, @AuthenticationPrincipal User user) {
        System.out.println(user);
        UUID questionId = questionService.create(dto, user);
        return ResponseEntity.status(HttpStatus.CREATED).body(questionId);
    }

    @GetMapping
    public ResponseEntity<List<ResponseQuestionDto>> findByUser(@AuthenticationPrincipal User user) {
        List<ResponseQuestionDto> questions = questionService.listAllbyUser(user);
        return ResponseEntity.ok(questions);
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteUser(@PathVariable UUID id) {
        questionService.delete(id);
        return ResponseEntity.status(HttpStatus.OK).build();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Question> findById(@PathVariable UUID id) {
        Question question = questionService.findById(id);
        return ResponseEntity.ok(question);
    }
}
