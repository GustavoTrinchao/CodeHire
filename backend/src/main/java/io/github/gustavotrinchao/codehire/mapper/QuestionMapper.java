package io.github.gustavotrinchao.codehire.mapper;

import io.github.gustavotrinchao.codehire.dto.request.CreateQuestionDto;
import io.github.gustavotrinchao.codehire.dto.request.CreateQuestionOptionDto;
import io.github.gustavotrinchao.codehire.dto.response.ResponseQuestionDto;
import io.github.gustavotrinchao.codehire.dto.response.ResponseQuestionOptionDto;
import io.github.gustavotrinchao.codehire.model.Question;
import io.github.gustavotrinchao.codehire.model.QuestionOption;
import io.github.gustavotrinchao.codehire.model.User;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class QuestionMapper {

    public Question toEntity(CreateQuestionDto dto, User user) {
        Question question = new Question();

        question.setType(dto.type());
        question.setDifficulty(dto.difficulty());
        question.setDescription(dto.description());
        question.setTitle(dto.title());
        question.setTags(dto.tags());
        question.setCreatedBy(user);
        if (dto.options() != null) {
            List<QuestionOption> options = dto.options()
                    .stream()
                    .map(this::toEntity)
                    .toList();

            options.forEach(option -> option.setQuestion(question));
            question.setOptions(options);
        }
        return question;
    }
    public QuestionOption toEntity(CreateQuestionOptionDto dto) {
        QuestionOption option = new QuestionOption();

        option.setContent(dto.content());
        option.setCorrect(dto.correct());

        return option;
    }
    public ResponseQuestionDto toDto(Question question) {
        List<ResponseQuestionOptionDto> options = question.getOptions()
                .stream()
                .map(this::toDto)
                .toList();

        return new ResponseQuestionDto(
                question.getId(),
                question.getTitle(),
                question.getType(),
                question.getDifficulty(),
                question.getTags()
        );
    }
    public ResponseQuestionOptionDto toDto(QuestionOption option) {
        return new ResponseQuestionOptionDto(
                option.getId(),
                option.getContent(),
                option.isCorrect()
        );
    }
}