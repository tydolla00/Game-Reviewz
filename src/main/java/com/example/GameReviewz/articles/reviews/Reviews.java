package com.example.GameReviewz.articles.reviews;

import jakarta.persistence.*;
import lombok.*;

@NoArgsConstructor
@AllArgsConstructor
@ToString
@Getter
@Setter
@Entity
@Table(name = "reviews")
public class Reviews {
//  Used for TechPostMaps
    public Reviews(long techId, String review){
        this.techId = techId;
        this.review = review;
    }
//  Used for GamesPostMaps
    public Reviews(String review, Long gamesId){
        this.review = review;
        this.gamesId = gamesId;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column
    private String review;

    @Column(name = "tech_id")
    private Long techId;

    @Column(name = "games_id")
    private Long gamesId;

    @Column(columnDefinition = "integer default 0")
    private int likes;
}
