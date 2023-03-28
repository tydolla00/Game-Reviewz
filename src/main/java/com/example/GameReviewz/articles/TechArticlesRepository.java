package com.example.GameReviewz.articles;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TechArticlesRepository extends JpaRepository<TechArticles, Long> {
}
