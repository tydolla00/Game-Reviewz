package com.example.GameReviewz.articles;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface GameArticlesRepository extends JpaRepository<GameArticles, Long> {
}
