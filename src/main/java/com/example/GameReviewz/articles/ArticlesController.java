package com.example.GameReviewz.articles;

import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = {"http://localhost:3000/", "https://master.dgx57da20s84e.amplifyapp.com/"})
@RequestMapping("/api/v1/articles")
@RestController
@AllArgsConstructor
public class ArticlesController {

    private final ArticlesService articlesService;

    @GetMapping("/game/articles")
    public ResponseEntity<List<GameArticles>> getAllGameArticles() {
        return new ResponseEntity<>(articlesService.getAllGameArticles(),HttpStatus.OK);
    }

    @GetMapping(path = "/games/{articleId}")
    public ResponseEntity<Optional<GameArticles>> getGameArticle(@PathVariable("articleId") long articleId) {
        return new ResponseEntity<>(articlesService.getGameArticle(articleId),HttpStatus.OK);
    }

    @GetMapping("/tech/articles")
    public ResponseEntity<List<TechArticles>> getAllTechArticles() {
        return new ResponseEntity<>(articlesService.getAllTechArticles(),HttpStatus.OK);
    }

    @GetMapping(path = "/tech/{articleId}")
    public ResponseEntity<Optional<TechArticles>> getTechArticle(@PathVariable("articleId") long articleId) {
        return new ResponseEntity<>(articlesService.getTechArticle(articleId),HttpStatus.OK);
    }
}
