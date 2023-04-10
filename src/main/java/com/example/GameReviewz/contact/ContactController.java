package com.example.GameReviewz.contact;

import com.example.GameReviewz.articles.reviews.Reviews;
import com.example.GameReviewz.articles.reviews.ReviewsService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:3000/")
@RequestMapping("/api/v1")
@RestController
@AllArgsConstructor
public class ContactController {
    private final ContactService contactService;

    @PostMapping("contactform")
    public ResponseEntity<ContactForm> addForm(@RequestBody ContactForm contactForm){
        return new ResponseEntity<>(contactService.addForm(contactForm), HttpStatus.CREATED);
    }

}
