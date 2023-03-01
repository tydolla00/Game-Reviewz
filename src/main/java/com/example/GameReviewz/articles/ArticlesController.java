package com.example.GameReviewz.articles;

import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/v1")
@RestController
@AllArgsConstructor
public class ArticlesController {

    @Autowired
    ArticlesRepository articlesRepository;

//    @GetMapping("/articles")
//    public List<Articles> getAllArticles(){
//        createArticle();
//        return articlesRepository.findAll();
//    }

    public void createArticle(){ //ignore
        Articles a = new Articles(1000000000L,"Title Test", "TyTest", "This is a test review", "path/totest", 10);
        articlesRepository.save(a);
    }


    @GetMapping("/articles")
    public ResponseEntity<List<Articles>> getAllArticles(){
        try {
            List<Articles> articles = articlesRepository.findAll();
            return new ResponseEntity<>(articles, HttpStatus.OK);
        }
        catch (Exception e){
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
