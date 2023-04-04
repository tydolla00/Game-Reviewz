package com.example.GameReviewz.images;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ImagesRepository extends JpaRepository<Images, Long> {
    @Query(value = "SELECT * FROM IMAGES WHERE article_id = :id", nativeQuery = true)
    List<Images> findAllById(@Param("id") long articleId);

//    @Query(value = "SELECT * FROM IMAGES WHERE ID = :targetid", nativeQuery = true)
//    List<Images> getImagesByImageId(@Param("targetid")int targetid);
}
