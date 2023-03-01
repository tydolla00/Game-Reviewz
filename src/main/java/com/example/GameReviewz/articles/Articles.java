package com.example.GameReviewz.articles;

import lombok.*;

import javax.persistence.*;
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Getter
@Setter
@Entity
@Table(name = "game_articles")
public class Articles {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(name = "title")
    private String title;

    @Column(name = "reviewer")
    private String reviewer;

    @Column(name = "review")
    private String review;

    @Column(name = "path")
    private String path;

    @Column(columnDefinition = "integer default 0")
    private int comments;

    public Articles(String title, String reviewer, String review, String path, int comments){
        this.title = title;
        this.reviewer = reviewer;
        this.review = review;
        this.path = path;
        this.comments = comments;
    }

}
