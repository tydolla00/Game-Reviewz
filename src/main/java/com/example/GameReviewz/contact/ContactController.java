package com.example.GameReviewz.contact;

import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = { "http://localhost:3000/", "https://master.dgx57da20s84e.amplifyapp.com/","https://www.gamereviewz.dev"})
@RequestMapping("/api/v1/contact")
@RestController
@AllArgsConstructor
public class ContactController {
    private final ContactService contactService;

    @PostMapping("/contactform")
    public ResponseEntity<ContactForm> addForm(@RequestBody ContactForm contactForm){
        return new ResponseEntity<>(contactService.addForm(contactForm), HttpStatus.CREATED);
    }

}
