package com.example.GameReviewz.UserAuthentication;

import com.example.GameReviewz.Exceptions.AuthenticationInvalidException;
import com.example.GameReviewz.UserAuthentication.authentication.AuthenticationRequest;
import com.example.GameReviewz.UserAuthentication.authentication.AuthenticationResponse;
import com.example.GameReviewz.UserAuthentication.authentication.AuthenticationService;
import com.example.GameReviewz.UserAuthentication.authentication.RegisterRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/v1/auth")
@RequiredArgsConstructor
public class AuthenticationController {
    @Autowired
    private AuthenticationService service;
    @PostMapping("/register")
    public ResponseEntity<Object> register(@RequestBody RegisterRequest request) throws Exception{
        try{
            return ResponseEntity.ok(service.register(request));
        }
        catch (Exception e){
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }
    @PostMapping("/authenticate")
    public ResponseEntity<AuthenticationResponse> authenticate(@RequestBody AuthenticationRequest request) throws Exception {
        try {
            return ResponseEntity.ok(service.authenticate(request));
        }
        catch (AuthenticationInvalidException exception){
            System.out.println("Hello Worldsss");
            throw new AuthenticationInvalidException("User Authentication failed");
        }
    }
    @GetMapping("/user") // In demo controller since authenticated already just call this method with object of authcontroller.
    public ResponseEntity<User> getUser(@RequestBody AuthenticationRequest request){
        return new ResponseEntity<>(service.getUser(request), HttpStatus.OK);
    }
}
