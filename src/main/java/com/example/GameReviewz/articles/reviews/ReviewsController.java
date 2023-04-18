package com.example.GameReviewz.articles.reviews;

import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000/")
@RequestMapping("/api/v1/comments")
@RestController
@AllArgsConstructor
public class ReviewsController {
    private final ReviewsService reviewsService;

    @GetMapping("/games/reviews/{articleId}")
    public ResponseEntity<List<GameReviews>> getGamesReviewsById(@PathVariable("articleId") long articleId){
        return new ResponseEntity<>(reviewsService.getGamesReviewsById(articleId), HttpStatus.OK);
    }

    @PostMapping("/games/reviews")
    public ResponseEntity<GameReviews> addGameReviewById(@RequestBody GameReviews reviews){
        return new ResponseEntity<>(reviewsService.addGameReviewById(reviews),HttpStatus.CREATED);
    }

    @GetMapping("/tech/reviews/{articleId}")
    public ResponseEntity<List<TechReviews>> getTechReviewsById(@PathVariable("articleId") long articleId){
        return new ResponseEntity<>(reviewsService.getTechReviewsById(articleId), HttpStatus.OK);
    }

    @PostMapping("/tech/reviews")
    public ResponseEntity<TechReviews> addTechReview(@RequestBody TechReviews reviews){
        return new ResponseEntity<>(reviewsService.addTechReviewById(reviews),HttpStatus.CREATED);
    }
}
