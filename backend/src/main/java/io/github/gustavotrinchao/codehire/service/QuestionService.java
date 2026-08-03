package io.github.gustavotrinchao.codehire.service;

import io.github.gustavotrinchao.codehire.dto.request.CreateQuestionDto;
import io.github.gustavotrinchao.codehire.dto.response.ResponseQuestionDto;
import io.github.gustavotrinchao.codehire.mapper.QuestionMapper;
import io.github.gustavotrinchao.codehire.model.Question;
import io.github.gustavotrinchao.codehire.model.User;
import io.github.gustavotrinchao.codehire.repository.QuestionRepository;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class QuestionService {
    private final QuestionRepository questionRepository;
    private final QuestionMapper questionMapper;

    public void create(CreateQuestionDto dto, User user) {
        Question question = questionMapper.toEntity(dto, user);
        questionRepository.save(question);
    }

    public Question findById(UUID id) {
        return questionRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Question not founded"));
    }

    public List<ResponseQuestionDto> listAllbyUser(User user){
        return questionRepository.findAllByCreatedBy(user)
            .stream()
            .map(questionMapper::toDto)
            .toList();
    }
}
