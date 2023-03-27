package com.example.GameReviewz.images;

import com.example.GameReviewz.articles.Articles;
import jakarta.persistence.*;
import lombok.*;

@NoArgsConstructor
@AllArgsConstructor
@ToString
@Getter
@Setter
//@Entity
//@Table(name = "images")
public class Images {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "image_id")
    private Long imageId;

    @ManyToOne
    @JoinColumn(name = "id")
    private Articles article;
    @Column(name = "path")
    private String path;

}
