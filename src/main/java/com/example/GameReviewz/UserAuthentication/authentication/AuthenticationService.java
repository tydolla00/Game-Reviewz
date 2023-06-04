package com.example.GameReviewz.UserAuthentication.authentication;

import com.example.GameReviewz.Exceptions.AuthenticationInvalidException;
import com.example.GameReviewz.UserAuthentication.Role;
import com.example.GameReviewz.UserAuthentication.User;
import com.example.GameReviewz.UserAuthentication.UserRepository;
import com.example.GameReviewz.jwt.JwtTokenHelper;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

@Service
@RequiredArgsConstructor
public class AuthenticationService {
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private PasswordEncoder passwordEncoder;
    @Autowired
    JwtTokenHelper jwtTokenHelper;

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
        authenticate2(request.getEmail(), request.getPassword());
        UserDetails userDetails=userRepository.findByEmail(request.getEmail()).get();

        String token= jwtTokenHelper.generateToken(userDetails);

        return new AuthenticationResponse(token,user.getId(),user.getEmail(),user.getUsername(),user.getRole().toString());
    }

    public AuthenticationResponse authenticate(AuthenticationRequest request) throws Exception {
        authenticate2(request.getEmail(), request.getPassword());
        UserDetails userDetails=userRepository.findByEmail(request.getEmail()).get();

        String token= jwtTokenHelper.generateToken(userDetails);
        User user = userRepository.findByEmail(request.getEmail()).orElseThrow();
        return new AuthenticationResponse(token,user.getId(),user.getEmail(),user.getRealUsername(),user.getRole().toString());
    }

    public User getUser (Integer id){
        User user = userRepository.findById(id).orElseThrow();
        return new User(user.getId(), user.getFirstName(), user.getLastName(), user.getEmail(), user.getRealUsername(), user.getRole());
    }

    private void authenticate2(String email, String password) throws Exception {
        UsernamePasswordAuthenticationToken usernamePasswordAuthenticationToken = new UsernamePasswordAuthenticationToken(email, password);

        try {
            authenticationManager.authenticate(usernamePasswordAuthenticationToken);
        }catch (BadCredentialsException e){
            System.out.println("Invalid Details !!");
            throw new Exception("Invalid username or password");
        }


    }
}