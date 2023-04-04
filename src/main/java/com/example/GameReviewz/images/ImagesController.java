package com.example.GameReviewz.images;

import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:3000/")
@RequestMapping("/api/v1")
@RestController
@AllArgsConstructor
public class ImagesController {
    private final ImagesService imagesService;

    @GetMapping("/images/{articleId}")
    public ResponseEntity<List<Images>> getImagesById(@PathVariable("articleId") long articleId ){
        return new ResponseEntity<>(imagesService.getImagesById(articleId), HttpStatus.OK);
    }
}
