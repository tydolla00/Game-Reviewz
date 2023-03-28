package com.example.GameReviewz.articles;

import com.example.GameReviewz.Exceptions.ArticleNotFoundException;
import com.example.GameReviewz.Exceptions.ArticlesNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class ArticlesService {

    @Autowired
    GameArticlesRepository gameArticlesRepository;
    @Autowired
    TechArticlesRepository techArticlesRepository;

    public List<GameArticles> getAllGameArticles(){
        List<GameArticles> articles;
        try{
            articles = gameArticlesRepository.findAll();
        }catch (Exception e){
            throw new ArticlesNotFoundException("Articles Database is Empty");
        }
        return articles;
    }

    public Optional<GameArticles> getGameArticle(long articleId){
        Optional<GameArticles> article;
        try{
            article = gameArticlesRepository.findById(articleId);
        } catch (Exception e){
            throw new ArticleNotFoundException("The Article you are looking for does not exist.");
        }
        return article;
    }

    public List<TechArticles> getAllTechArticles(){
        List<TechArticles> articles;
        try{
            articles = techArticlesRepository.findAll();
        }catch (Exception e){
            throw new ArticlesNotFoundException("Articles Database is Empty");
        }
        return articles;
    }

    public Optional<TechArticles> getTechArticle(long articleId){
        Optional<TechArticles> article;
        try{
            article = techArticlesRepository.findById(articleId);
        } catch (Exception e){
            throw new ArticleNotFoundException("The Article you are looking for does not exist.");
        }
        return article;
    }
}
