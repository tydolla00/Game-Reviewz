package com.example.GameReviewz.articles.reviews;

import javax.persistence.*;
import lombok.*;

import java.text.SimpleDateFormat;
import java.util.Date;

@NoArgsConstructor
@AllArgsConstructor
@ToString
@Getter
@Setter
@Entity
@Table(name = "game_reviews")
public class GameReviews {
    public GameReviews(String comment, Long userId, Integer parentId, Long gamesId){
        SimpleDateFormat format = new SimpleDateFormat("dd/MM/yyyy HH:mm:ss");
        Date currdate = new Date();

        this.comment = comment;
        this.userId = userId;
        this.parentId = parentId;
        this.createdAt = format.format(currdate);
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

    @Column(name = "created_at")
    private String createdAt;

    @Column(name = "games_id")
    private Long gamesId;

    @Column(columnDefinition = "integer default 0")
    private int likes;
}
