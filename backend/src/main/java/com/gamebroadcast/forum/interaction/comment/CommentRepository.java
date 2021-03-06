package com.gamebroadcast.forum.interaction.comment;

import java.util.List;

import com.gamebroadcast.forum.interaction.comment.models.Comment;

import org.springframework.data.jpa.repository.JpaRepository;

public interface CommentRepository extends JpaRepository<Comment, Long> {

    public List<Comment> findByContentId(Long id);

    public List<Comment> findByAuthorId(Long id);
}
