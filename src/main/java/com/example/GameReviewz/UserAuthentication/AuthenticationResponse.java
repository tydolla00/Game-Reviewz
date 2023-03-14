package com.example.GameReviewz.UserAuthentication;

import lombok.*;

@Getter
@Setter
@Builder
@ToString
@AllArgsConstructor
@NoArgsConstructor
public class AuthenticationResponse {
    private String token;
}
