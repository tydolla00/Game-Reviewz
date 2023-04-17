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
    ReviewsRepository reviewsRepository;

    public List<Reviews> getGamesReviewsById(long articleId){
        List<Reviews> reviews;
        try{
            reviews = reviewsRepository.findAllGamesById(articleId);
        }
        catch (Exception e){
            throw new ArticleNotFoundException("Bad Request in Reviews Repository");
        }
        return reviews;
    }

    public List<Reviews> getTechReviewsById(long articleId){
        List<Reviews> reviews;
        try{
            reviews = reviewsRepository.findAllTechById(articleId);
        }
        catch (Exception e){
            throw new ArticleNotFoundException("Bad Request in reviews");
        }
        return reviews;
    }

    public Reviews addTechReview(Reviews reviews) {
        try{
            return reviewsRepository.save(new Reviews(reviews.getTechId(), reviews.getComment()));
        }
        catch (Exception e){
            throw new ArticleNotFoundException("Bad Request");
        }
    }

    public Reviews addGameReviewById(Reviews reviews) {
        try{
            return reviewsRepository.save(new Reviews(reviews.getComment(), reviews.getGamesId()));
        }
        catch(Exception e){
            throw new ArticleNotFoundException("Bad Request");
        }

    }
}
