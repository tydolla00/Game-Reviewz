package com.example.GameReviewz.articles;

import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
<<<<<<< HEAD
=======

>>>>>>> b8cd483c081dea6bd536603c899be4d1f1fec675
import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:3000/")
@RequestMapping("/api/v1")
@RestController
@AllArgsConstructor
public class ArticlesController {


    private final ArticlesService articlesService;
    @Autowired
    ArticlesRepository articlesRepository;

    // @GetMapping("/articles")
    // public List<Articles> getAllArticles(){
    // createArticle();
    // return articlesRepository.findAll();
    // }

    public void createArticle() { // ignore
//        Articles a = new Articles(1000000000L, "Title Test", "TyTest", "This is a test review", "path/totest", 10);
//        articlesRepository.save(a);
    }

//    @GetMapping("/articles")
//    public ResponseEntity<List<Articles>> getAllArticles() {
//        try {
//            List<Articles> articles = articlesRepository.findAll();
//            return new ResponseEntity<>(articles, HttpStatus.OK);
//        } catch (Exception e) {
//            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
//        }
//    }

    @GetMapping("/articles")
    public ResponseEntity<List<Articles>> getAllArticles() {
        return new ResponseEntity<>(articlesService.getAllArticles(),HttpStatus.OK);
    }

    @GetMapping(path = "/articles/{articleId}")
    public ResponseEntity<Optional<Articles>> getArticle(@PathVariable("articleId") long articleId) {
        return new ResponseEntity<>(articlesService.getArticle(articleId),HttpStatus.OK);
    }

    @GetMapping(path = "/articles/{articleId}")
    public ResponseEntity<Optional<Articles>> getArticle(@PathVariable("articleId") long articleId) {
        Optional<Articles> article;
        try {
            article = articlesRepository.findById(articleId);
        } catch (NoSuchElementException e) {
            return new ResponseEntity<>(null, HttpStatus.CONFLICT);
        }
        return new ResponseEntity<>(article, HttpStatus.OK);

    }

}
