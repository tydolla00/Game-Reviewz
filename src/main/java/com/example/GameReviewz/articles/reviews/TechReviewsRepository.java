package com.example.GameReviewz.articles.reviews;

import com.example.GameReviewz.UserAuthentication.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TechReviewsRepository extends JpaRepository<TechReviews, Long> {
    @Query(value = "SELECT * FROM tech_reviews WHERE tech_id = :id", nativeQuery = true)
    List<TechReviews> findAllTechById(@Param("id") long articleId);

    @Query(value = "SELECT users.username from users join tech_reviews tr on users.id = tr.user_id where users.id = :id LIMIT 1", nativeQuery = true)
    String findUsernameById(@Param("id") long id);
}
