package com.example.GameReviewz.polls;

import com.example.GameReviewz.UserAuthentication.User;
import com.example.GameReviewz.UserAuthentication.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class PollsService {
    @Autowired
    PollsRepository pollsRepository;
    @Autowired
    UserRepository userRepository;
    public String addVote(String polls) throws Exception {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String email = authentication.getName();
        Optional<User> user = userRepository.findByEmail(email);
        if(user.get().isVoted())
            throw new Exception("You Already Voted. Come back next week for the results and a new poll!");
        switch (polls.substring(15, 22)) {
            case "option1" -> pollsRepository.updateOption1();
            case "option2" -> pollsRepository.updateOption2();
            case "option3" -> pollsRepository.updateOption3();
            case "option4" -> pollsRepository.updateOption4();
        }
        user.get().setVoted(true);
        userRepository.save(user.get());
        return "Success";
    }
}
