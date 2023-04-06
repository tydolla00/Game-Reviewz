package com.example.GameReviewz.images;

import com.example.GameReviewz.Exceptions.ArticleNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ImagesService {
    @Autowired
    ImagesRepository imagesRepository;
    public List<Images> getGamesImagesById(long articleId) {
        List<Images> images;
        try{
            images = imagesRepository.findAllGamesImagesById(articleId);
        }
        catch (Exception e){
            throw new ArticleNotFoundException("Bad Image request.");
        }
        return images;
    }

    public List<Images> getTechImagesById(long articleId){
        List<Images> images;
        try{
            images = imagesRepository.findAllTechImagesById(articleId);
        }
        catch (Exception e){
            throw new ArticleNotFoundException("Bad Image Request");
        }
        return images;
    }
}
