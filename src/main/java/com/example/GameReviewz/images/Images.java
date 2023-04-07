package com.example.GameReviewz.images;

import com.example.GameReviewz.articles.GameArticles;
import jakarta.persistence.*;
import lombok.*;

@NoArgsConstructor
@AllArgsConstructor
@ToString
@Getter
@Setter
@Entity
@Table(name = "images")
public class Images {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "image_id")
    private Long imageId;

//    @ManyToOne
//    @JoinColumn(name = "id")
//    private GameArticles article;
    @Column(name = "games_id")
    private Long gamesId;

    @Column(name="tech_id")
    private Long techId;

    @Column(name = "path")
    private String path;

}
