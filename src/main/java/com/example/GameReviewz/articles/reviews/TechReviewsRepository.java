package com.example.GameReviewz.articles.reviews;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TechReviewsRepository extends JpaRepository<TechReviews, Long> {
    @Query(value = "SELECT * FROM Reviews WHERE tech_id = :id", nativeQuery = true)
    List<TechReviews> findAllTechById(@Param("id") long articleId);
}
