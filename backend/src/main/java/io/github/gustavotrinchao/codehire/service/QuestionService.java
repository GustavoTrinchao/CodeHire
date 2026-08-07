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

    public UUID create(CreateQuestionDto dto, User user) {
        Question question = questionMapper.toEntity(dto, user);
        return questionRepository.save(question).getId();
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

    public void delete(UUID id) {
        Question question = findById(id);
        questionRepository.delete(question);
    }

    public void update(Question question) {
        questionRepository.save(question);
    }
}
