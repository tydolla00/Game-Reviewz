package com.example.GameReviewz.articles.reviews;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface GameReviewsRepository extends JpaRepository<GameReviews, Long> {
    @Query(value = "SELECT * FROM game_reviews WHERE games_id = :id", nativeQuery = true)
    List<GameReviews> findAllGamesById(@Param("id") long articleId);

    @Query(value = "SELECT username from users where users.id = :id", nativeQuery = true)
    String findUsernameById(@Param("id") long id);
}
