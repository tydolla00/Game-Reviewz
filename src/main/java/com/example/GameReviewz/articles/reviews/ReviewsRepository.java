package com.example.GameReviewz.articles.reviews;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ReviewsRepository extends JpaRepository<Reviews, Long> {
    @Query(value = "SELECT * FROM Reviews WHERE games_id = :id", nativeQuery = true)
    List<Reviews> findAllGamesById(@Param("id") long articleId);

    @Query(value = "SELECT * FROM Reviews WHERE tech_id = :id", nativeQuery = true)
    List<Reviews> findAllTechById(@Param("id") long articleId);
}
