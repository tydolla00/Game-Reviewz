package com.example.GameReviewz.UserAuthentication.authentication;

import lombok.*;
import org.springframework.http.ResponseEntity;

@Getter
@Setter
@Builder
@ToString
@AllArgsConstructor
@NoArgsConstructor
public class AuthenticationResponse {
    private String token;
}