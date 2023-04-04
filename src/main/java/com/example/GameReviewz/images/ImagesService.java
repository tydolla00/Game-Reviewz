package com.example.GameReviewz.images;

import com.example.GameReviewz.Exceptions.ArticleNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class ImagesService {
    @Autowired
    ImagesRepository imagesRepository;
    public List<Images> getImagesById(long articleId) {
        List<Images> images;
        try{
            images = imagesRepository.findAllById(articleId);
        }
        catch (Exception e){
            throw new ArticleNotFoundException("Bad request.");
        }
        return images;
    }
}
