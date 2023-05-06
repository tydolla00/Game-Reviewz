package com.example.GameReviewz.articles.reviews;

import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = { "http://localhost:3000/", "https://master.dgx57da20s84e.amplifyapp.com/","https://gamereviewz.dev"})
@RequestMapping("/api/v1/comments")
@RestController
@AllArgsConstructor
public class ReviewsController {
    private final ReviewsService reviewsService;

    @GetMapping("/get/games/reviews/{articleId}")
    public ResponseEntity<List<GameReviews>> getGamesReviewsById(@PathVariable("articleId") long articleId){
        return new ResponseEntity<>(reviewsService.getGamesReviewsById(articleId), HttpStatus.OK);
    }

    @PostMapping("/games/reviews")
    public ResponseEntity<GameReviews> addGameReview(@RequestBody GameReviews reviews){
        return new ResponseEntity<>(reviewsService.addGameReview(reviews),HttpStatus.CREATED);
    }

    @PutMapping("/edit/games/reviews")
    public ResponseEntity<GameReviews> editGameReview(@RequestBody GameReviews reviews){
        return new ResponseEntity<>(reviewsService.editGameReview(reviews),HttpStatus.OK);
    }

    @DeleteMapping("/delete/games/reviews/{id}")
    public ResponseEntity<Long> deleteGameComment(@PathVariable("id") Long id){
        return new ResponseEntity<>(reviewsService.deleteGameComment(id), HttpStatus.OK);
    }

    @GetMapping("/string")
    public String getString(){
        return "helloworld";
    }
    @GetMapping("/get/tech/reviews/{articleId}")
    public ResponseEntity<List<TechReviews>> getTechReviewsById(@PathVariable("articleId") long articleId){
        return new ResponseEntity<>(reviewsService.getTechReviewsById(articleId), HttpStatus.OK);
    }

    @PostMapping("/tech/reviews")
    public ResponseEntity<TechReviews> addTechReview(@RequestBody TechReviews reviews){
        return new ResponseEntity<>(reviewsService.addTechReview(reviews),HttpStatus.CREATED);
    }
    @PutMapping("/edit/tech/reviews")
    public ResponseEntity<TechReviews> editTechReview(@RequestBody TechReviews reviews){
        return new ResponseEntity<>(reviewsService.editTechReview(reviews),HttpStatus.OK);
    }

    @DeleteMapping("/delete/tech/reviews/{id}")
    public ResponseEntity<Long> deleteTechComment(@PathVariable("id") Long id){
        return new ResponseEntity<>(reviewsService.deleteTechComment(id), HttpStatus.OK);
    }
}
