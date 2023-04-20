package com.example.GameReviewz.articles.reviews;

import com.example.GameReviewz.Exceptions.ArticleNotFoundException;
import com.example.GameReviewz.UserAuthentication.User;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ReviewsService {
    @Autowired
    GameReviewsRepository gameReviewsRepository;
    @Autowired
    TechReviewsRepository techReviewsRepository;

    public List<GameReviews> getGamesReviewsById(long articleId){ // Get comments for Game Articles
        List<GameReviews> reviews;
        try{
            reviews = gameReviewsRepository.findAllGamesById(articleId);
        }
        catch (Exception e){
            throw new ArticleNotFoundException("Bad Request in Reviews Repository");
        }
        return reviews;
    }

    public GameReviews addGameReview(GameReviews reviews) {
        String user = gameReviewsRepository.findUsernameById(reviews.getUserId());
        System.out.println(user);
        try{
            return gameReviewsRepository.save(new GameReviews(reviews.getComment(), reviews.getParentId(), reviews.getGamesId(), reviews.getUserId(), user));
//            return reviews;
        }
        catch(Exception e){
            throw new ArticleNotFoundException("Bad Request");
        }

    }

    public List<TechReviews> getTechReviewsById(long articleId){ // Get Comments for Tech Articles
        List<TechReviews> reviews;
        try{
            reviews = techReviewsRepository.findAllTechById(articleId);
        }
        catch (Exception e){
            throw new ArticleNotFoundException("Bad Request in reviews");
        }
        return reviews;
    }

    public TechReviews addTechReview(TechReviews reviews) {
        String user = techReviewsRepository.findUsernameById(reviews.getUserId());
        System.out.println(user);
        try{
            return techReviewsRepository.save(new TechReviews(reviews.getComment(),
                    reviews.getParentId(), reviews.getTechId(), reviews.getUserId(),user));
//            return techReviewsRepository.save(reviews);
        }
        catch (Exception e){
            throw new ArticleNotFoundException("Bad Request");
        }
    }

    public GameReviews editGameReview(GameReviews reviews) {
        GameReviews updateComment = gameReviewsRepository.findCommentById(reviews.getId());
        updateComment.setComment(reviews.getComment());
        gameReviewsRepository.save(updateComment);
        return updateComment;
    }

    public TechReviews editTechReview(TechReviews reviews) {
        TechReviews updateComment = techReviewsRepository.findCommentById(reviews.getId());
        updateComment.setComment(reviews.getComment());
        techReviewsRepository.save(updateComment);
        return updateComment;
    }

    public Long deleteGameComment(Long id) {
        gameReviewsRepository.deleteById(id);
        return id;
    }

    public Long deleteTechComment(Long id) {
        techReviewsRepository.deleteById(id);
        return id;
    }
}
