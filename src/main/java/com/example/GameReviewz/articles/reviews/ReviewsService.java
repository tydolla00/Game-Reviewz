package com.example.GameReviewz.articles.reviews;

import com.example.GameReviewz.Exceptions.ArticleNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
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

    public GameReviews addGameReviewById(GameReviews reviews) {
        try{
            return gameReviewsRepository.save(new GameReviews());
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

    public TechReviews addTechReviewById(TechReviews reviews) {
        try{
            return techReviewsRepository.save(new TechReviews(reviews.getComment(), reviews.getUserId(), reviews.getParentId(), reviews.getTechId()));
        }
        catch (Exception e){
            throw new ArticleNotFoundException("Bad Request");
        }
    }

}
