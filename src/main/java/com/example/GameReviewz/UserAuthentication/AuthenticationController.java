package com.example.GameReviewz.UserAuthentication;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/v1/auth")
@RequiredArgsConstructor
public class AuthenticationController {
    private final AuthenticationService service;
    @PostMapping("/register")
    public ResponseEntity<AuthenticationResponse> register(@RequestBody RegisterRequest request) throws Exception{
//       try{
           return ResponseEntity.ok(service.register(request));
//      }catch (Exception e){
//           return ResponseEntity.badRequest();
//       }
    }
    @PostMapping("/authenticate")
    public ResponseEntity<AuthenticationResponse> authenticate(@RequestBody AuthenticationRequest request){
        return ResponseEntity.ok(service.authenticate(request));
    }
    @GetMapping("/user") // In demo controller since authenticated already just call this method with object of authcontroller.
    public ResponseEntity<User> getUser(@RequestBody AuthenticationRequest request){
        return new ResponseEntity<>(service.getUser(request), HttpStatus.OK);
    }
}
