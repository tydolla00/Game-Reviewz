package com.example.GameReviewz.admin;

import com.example.GameReviewz.UserAuthentication.User;
import com.example.GameReviewz.UserAuthentication.UserRepository;
import com.example.GameReviewz.articles.GameArticles;
import com.example.GameReviewz.articles.GameArticlesRepository;
import com.example.GameReviewz.articles.TechArticles;
import com.example.GameReviewz.articles.TechArticlesRepository;
import com.example.GameReviewz.articles.reviews.GameReviews;
import com.example.GameReviewz.articles.reviews.GameReviewsRepository;
import com.example.GameReviewz.articles.reviews.TechReviews;
import com.example.GameReviewz.articles.reviews.TechReviewsRepository;
import com.example.GameReviewz.contact.ContactForm;
import com.example.GameReviewz.contact.ContactRepository;
import com.example.GameReviewz.images.Images;
import com.example.GameReviewz.images.ImagesRepository;
import com.example.GameReviewz.polls.Polls;
import com.example.GameReviewz.polls.PollsRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
@RequiredArgsConstructor
public class AdminService {
    @Autowired
    private ContactRepository contactRepository;
    @Autowired
    private GameArticlesRepository gameArticlesRepository;
    @Autowired
    private GameReviewsRepository gameReviewsRepository;
    @Autowired
    private ImagesRepository imagesRepository;
    @Autowired
    private PollsRepository pollsRepository;
    @Autowired
    private TechArticlesRepository techArticlesRepository;
    @Autowired
    private TechReviewsRepository techReviewsRepository;
    @Autowired
    private UserRepository userRepository;
    public List<ContactForm> getContactTable() {
        return contactRepository.findAll();
    }

    public List<GameArticles> getGameArticlesTable() {
        return gameArticlesRepository.findAll();
    }

    public List<GameReviews> getGameReviewsTable() {
        return gameReviewsRepository.findAll();
    }

    public List<Images> getImagesTable() {
        return imagesRepository.findAll();
    }

    public List<Polls> getPollsTable() {
        return pollsRepository.findAll();
    }

    public List<TechArticles> getTechArticlesTable() {
        return techArticlesRepository.findAll();
    }

    public List<TechReviews> getTechReviewsTable() {
        return techReviewsRepository.findAll();
    }

    public List<User> getUsersTable() {
        return userRepository.findAll();
    }
}
