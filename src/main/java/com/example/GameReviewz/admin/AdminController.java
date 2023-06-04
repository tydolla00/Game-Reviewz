package com.example.GameReviewz.admin;

import com.example.GameReviewz.UserAuthentication.User;
import com.example.GameReviewz.articles.GameArticles;
import com.example.GameReviewz.articles.TechArticles;
import com.example.GameReviewz.articles.reviews.GameReviews;
import com.example.GameReviewz.articles.reviews.TechReviews;
import com.example.GameReviewz.contact.ContactForm;
import com.example.GameReviewz.images.Images;
import com.example.GameReviewz.polls.Polls;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin(origins = { "http://localhost:3000/", "https://master.dgx57da20s84e.amplifyapp.com","https://www.gamereviewz.dev"})
@RequestMapping("/api/v1/admindashboard")
@RestController
@AllArgsConstructor
public class AdminController {
    private final AdminService adminService;

    @GetMapping("/contact")
    public ResponseEntity<List<ContactForm>> getContactTable(){
        return new ResponseEntity<>(adminService.getContactTable(),HttpStatus.OK);
    }
    @GetMapping("/gamesarticles")
    public ResponseEntity<List<GameArticles>> getGameArticlesTable(){
        return new ResponseEntity<>(adminService.getGameArticlesTable(),HttpStatus.OK);
    }
    @GetMapping("/gamesreviews")
    public ResponseEntity<List<GameReviews>> getGameReviewsTable(){
        return new ResponseEntity<>(adminService.getGameReviewsTable(),HttpStatus.OK);
    }
    @GetMapping("/images")
    public ResponseEntity<List<Images>> getImagesTable(){
        return new ResponseEntity<>(adminService.getImagesTable(),HttpStatus.OK);
    }
    @GetMapping("/polls")
    public ResponseEntity<List<Polls>> getPollsTable(){
        return new ResponseEntity<>(adminService.getPollsTable(),HttpStatus.OK);
    }
    @GetMapping("/techarticles")
    public ResponseEntity<List<TechArticles>> getTechArticlesTable(){
        return new ResponseEntity<>(adminService.getTechArticlesTable(),HttpStatus.OK);
    }
    @GetMapping("/techreviews")
    public ResponseEntity<List<TechReviews>> getTechReviewsTable(){
        return new ResponseEntity<>(adminService.getTechReviewsTable(),HttpStatus.OK);
    }
    @GetMapping("/users")
    public ResponseEntity<List<User>> getUsersTable(){
        return new ResponseEntity<>(adminService.getUsersTable(),HttpStatus.OK);
    }
}
