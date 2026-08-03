package io.github.gustavotrinchao.codehire.repository;

import io.github.gustavotrinchao.codehire.model.Question;
import io.github.gustavotrinchao.codehire.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.UUID;

@Repository
public interface QuestionRepository extends JpaRepository<Question, UUID> {
    List<Question> findAllByCreatedBy(User user);
}

