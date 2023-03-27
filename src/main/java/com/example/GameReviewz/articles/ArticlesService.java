package com.example.GameReviewz.articles;

import com.example.GameReviewz.Exceptions.ArticleNotFoundException;
import com.example.GameReviewz.Exceptions.ArticlesNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class ArticlesService {

    @Autowired
    ArticlesRepository articlesRepository;

    public List<Articles> getAllArticles(){
        List<Articles> articles;
        try{
            articles = articlesRepository.findAll();
        }catch (Exception e){
            throw new ArticlesNotFoundException("Articles Database is Empty");
        }
        return articles;
    }

    public Optional<Articles> getArticle(long articleId){
        Optional<Articles> article;
        try{
            article = articlesRepository.findById(articleId);
        } catch (Exception e){
            throw new ArticleNotFoundException("The Article you are looking for does not exist.");
        }
        return article;
    }
}
