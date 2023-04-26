package com.example.GameReviewz.images;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ImagesRepository extends JpaRepository<Images, Long> {
    @Query(value = "SELECT * FROM IMAGES WHERE games_id = :id ORDER BY image_id", nativeQuery = true)
    List<Images> findAllGamesImagesById(@Param("id") long articleId);

    @Query(value = "SELECT * FROM IMAGES WHERE tech_id = :id ORDER BY image_id", nativeQuery = true)
    List<Images> findAllTechImagesById(@Param("id") long articleId);

//    @Query(value = "SELECT * FROM IMAGES WHERE ID = :targetid", nativeQuery = true)
//    List<Images> getImagesByImageId(@Param("targetid")int targetid);
}
