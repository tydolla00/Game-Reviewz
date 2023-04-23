package com.example.GameReviewz.images;

import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000/")
@RequestMapping("/api/v1/articles")
@RestController
@AllArgsConstructor
public class ImagesController {
    private final ImagesService imagesService;

    @GetMapping("/games/images/{articleId}")
    public ResponseEntity<List<Images>> getGamesImagesById(@PathVariable("articleId") long articleId ){
        return new ResponseEntity<>(imagesService.getGamesImagesById(articleId), HttpStatus.OK);
    }

    @GetMapping("/tech/images/{articleId}")
    public ResponseEntity<List<Images>> getTechImagesById(@PathVariable("articleId") long articleId ){
        return new ResponseEntity<>(imagesService.getTechImagesById(articleId), HttpStatus.OK);
    }
}
