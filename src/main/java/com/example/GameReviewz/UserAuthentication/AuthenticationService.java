package com.example.GameReviewz.UserAuthentication;

import com.example.GameReviewz.Exceptions.AuthenticationInvalidException;
import com.example.GameReviewz.UserAuthentication.authentication.AuthenticationRequest;
import com.example.GameReviewz.UserAuthentication.authentication.AuthenticationResponse;
import com.example.GameReviewz.UserAuthentication.authentication.RegisterRequest;
import com.example.GameReviewz.config.JwtService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

@Service
@RequiredArgsConstructor
public class AuthenticationService {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;
    public AuthenticationResponse register(RegisterRequest request) throws Exception {
        if (userRepository.existsByUsername(request.getUsername())){
            throw new Exception("Username already taken");
        }
        if(userRepository.existsByEmail(request.getEmail())){
            throw new Exception("Email Already exists");
        }
        var user = User.builder()
                .firstName(request.getFirstName())
                .username((request.getUsername()))
                .lastName(request.getLastName())
                .email(request.getEmail())
                .password(passwordEncoder.encode(request.getPassword()))
                .role(Role.USER)
                .build();
        userRepository.save(user);
        var jwtToken = jwtService.generateToken(user);
        return AuthenticationResponse.builder().token(jwtToken).build();
    }

    public AuthenticationResponse authenticate(AuthenticationRequest request) {
        try{
            System.out.println("Can you see me");
            authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword())
            );
        }
        catch (Exception exception){
            System.out.println("Hello World");
            throw new AuthenticationInvalidException("User Authentication failed");
        }
        var user = userRepository.findByEmail(request.getEmail()).orElseThrow();
        var jwtToken = jwtService.generateToken(user);
        return AuthenticationResponse.builder()
                .token(jwtToken)
                .id(user.getId())
                .email(user.getEmail())
                .username(user.getUsername())
                .build();
    }

    public User getUser (@RequestBody AuthenticationRequest request){
        try {
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword()));
        }catch (Exception e){
            return new User();
        }
        return userRepository.findByEmail(request.getEmail()).orElseThrow();

    }
}
