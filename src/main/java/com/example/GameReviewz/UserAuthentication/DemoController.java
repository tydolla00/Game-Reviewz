package com.example.GameReviewz.UserAuthentication;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/v1/auth/demo")
@RequiredArgsConstructor
public class DemoController {
    private final AuthenticationService service;
//    public ResponseEntity<User> getUser (){
//        return new ResponseEntity<>()
//    }
}
