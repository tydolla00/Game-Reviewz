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
    public Reviews(long techId, String comment){
        this.techId = techId;
        this.comment = comment;
    }
//  Used for GamesPostMaps
    public Reviews(String comment, Long gamesId){
        this.comment = comment;
        this.gamesId = gamesId;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column
    private String comment;

    @Column(name = "user_id")
    private Long userId;

    @Column(name = "parent_id")
    private Integer parentId;

    @Column
    private

    @Column(name = "tech_id")
    private Long techId;

    @Column(name = "games_id")
    private Long gamesId;

    @Column(columnDefinition = "integer default 0")
    private int likes;
}
