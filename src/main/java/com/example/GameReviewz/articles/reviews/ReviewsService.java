package com.example.GameReviewz.articles.reviews;

import com.example.GameReviewz.Exceptions.ArticleNotFoundException;
import com.example.GameReviewz.UserAuthentication.User;
import com.example.GameReviewz.articles.GameArticles;
import com.example.GameReviewz.articles.GameArticlesRepository;
import com.example.GameReviewz.articles.TechArticles;
import com.example.GameReviewz.articles.TechArticlesRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class ReviewsService {
    @Autowired
    GameReviewsRepository gameReviewsRepository;
    @Autowired
    GameArticlesRepository gameArticlesRepository;
    @Autowired
    TechReviewsRepository techReviewsRepository;
    @Autowired
    TechArticlesRepository techArticlesRepository;

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
            GameReviews newReview = gameReviewsRepository.save(new GameReviews(reviews.getComment(), reviews.getParentId(),
                    reviews.getGamesId(), reviews.getUserId(), user));
            GameArticles newArticle = gameArticlesRepository.findById(reviews.getGamesId()).get();
            newArticle.setComments(newArticle.getComments()+1);
            gameArticlesRepository.save(newArticle);
            return newReview;
        }
        catch(Exception e){
            throw new ArticleNotFoundException("Bad Request");
        }

    }

    public GameReviews editGameReview(GameReviews reviews) {
        GameReviews updateComment = gameReviewsRepository.findCommentById(reviews.getId());
        updateComment.setComment(reviews.getComment());
        gameReviewsRepository.save(updateComment);
        return updateComment;
    }

    public Long deleteGameComment(Long id) {
        Long gamesId = gameReviewsRepository.findById(id).get().getGamesId();
        gameReviewsRepository.deleteById(id);
        GameArticles gameArticles = gameArticlesRepository.findById(gamesId).get();
        gameArticles.setComments(gameArticles.getComments()-1);
        gameArticlesRepository.save(gameArticles);
        return id;
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
        try{
            TechReviews newReview = techReviewsRepository.save(new TechReviews(reviews.getComment(),
                    reviews.getParentId(), reviews.getTechId(), reviews.getUserId(),user));
            TechArticles techArticles = techArticlesRepository.findById(reviews.getTechId()).get();
            techArticles.setComments(techArticles.getComments()+1);
            techArticlesRepository.save(techArticles);
            return newReview;
        }
        catch (Exception e){
            throw new ArticleNotFoundException("Bad Request");
        }
    }

    public TechReviews editTechReview(TechReviews reviews) {
        TechReviews updateComment = techReviewsRepository.findCommentById(reviews.getId());
        updateComment.setComment(reviews.getComment());
        techReviewsRepository.save(updateComment);
        return updateComment;
    }

    public Long deleteTechComment(Long id) {
        Long techId = techReviewsRepository.findById(id).get().getTechId();
        techReviewsRepository.deleteById(id);
        TechArticles techArticles = techArticlesRepository.findById(techId).get();
        techArticles.setComments(techArticles.getComments()-1);
        techArticlesRepository.save(techArticles);
        return id;
    }
}
