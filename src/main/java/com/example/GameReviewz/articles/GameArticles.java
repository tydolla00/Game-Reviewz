package com.example.GameReviewz.articles;

import jakarta.persistence.*;
import lombok.*;

@NoArgsConstructor
@AllArgsConstructor
@ToString
@Getter
@Setter
@Entity
@Table(name = "game_articles")
public class GameArticles{
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

//    @OneToMany(mappedBy = "article", cascade = CascadeType.ALL)
//    private Set<Images> images = new HashSet<>();
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

    @Column(columnDefinition = "varchar default 'games'")
    private String base;

    @Column(name = "date")
    private String datePosted;

    @Column(name = "genre")
    private String genre;

    @Column(name = "release_date")
    private String releaseDate;

    public GameArticles(String title, String reviewer, String review, String path, int comments, String base, String datePosted, String genre, String releaseDate){
        this.title = title;
        this.reviewer = reviewer;
        this.review = review;
        this.path = path;
        this.comments = comments;
        this.base = base;
        this.datePosted = datePosted;
        this.genre = genre;
        this.releaseDate = releaseDate;
    }

}
