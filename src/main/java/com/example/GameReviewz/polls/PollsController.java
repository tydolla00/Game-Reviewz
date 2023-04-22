package com.example.GameReviewz.polls;

import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:3000/")
@RequestMapping("/api/v1/polls")
@RestController
@AllArgsConstructor
public class PollsController {

    private final PollsService pollsService;

    @PutMapping("/vote")
    public ResponseEntity<String> addVote(@RequestBody String polls){
        try{
            return new ResponseEntity<>(pollsService.addVote(polls), HttpStatus.OK);
        }
        catch (Exception e){
          return new ResponseEntity<>(e.getMessage(),HttpStatus.BAD_REQUEST);
        }
    }
}
