package com.example.GameReviewz.articles.reviews;

import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000/")
@RequestMapping("/api/v1")
@RestController
@AllArgsConstructor
public class ReviewsController {
    private final ReviewsService reviewsService;

    @GetMapping("/games/reviews/{articleId}")
    public ResponseEntity<List<Reviews>> getGamesReviewsById(@PathVariable("articleId") long articleId){
        return new ResponseEntity<>(reviewsService.getGamesReviewsById(articleId), HttpStatus.OK);
    }

    @GetMapping("/tech/reviews/{articleId}")
    public ResponseEntity<List<Reviews>> getTechReviewsById(@PathVariable("articleId") long articleId){
        return new ResponseEntity<>(reviewsService.getTechReviewsById(articleId), HttpStatus.OK);
    }
    @PostMapping("/games/reviews")
    public ResponseEntity<Reviews> addGameReviewById(@RequestBody Reviews reviews){
        return new ResponseEntity<>(reviewsService.addGameReviewById(reviews),HttpStatus.CREATED);
    }

    @PostMapping("/tech/reviews")
    public ResponseEntity<Reviews> addTechReview(@RequestBody Reviews reviews){
        return new ResponseEntity<>(reviewsService.addTechReview(reviews),HttpStatus.CREATED);
    }
}
