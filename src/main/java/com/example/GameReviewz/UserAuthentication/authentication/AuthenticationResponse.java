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
    private Integer id;
    private String email;
    private String username;
}
