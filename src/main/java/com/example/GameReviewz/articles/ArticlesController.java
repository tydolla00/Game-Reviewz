package com.example.GameReviewz.articles;

import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:3000/")
@RequestMapping("/api/v1")
@RestController
@AllArgsConstructor
public class ArticlesController {

    private final ArticlesService articlesService;

    public void createArticle() { // ignore
//        Articles a = new Articles(1000000000L, "Title Test", "TyTest", "This is a test review", "path/totest", 10);
//        articlesRepository.save(a);
    }

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
