package com.example.GameReviewz.articles;

import javax.persistence.*;
import javax.validation.constraints.Size;
import lombok.*;

@NoArgsConstructor
@AllArgsConstructor
@ToString
@Getter
@Setter
@Entity
@Table(name = "tech_articles")
public class TechArticles {
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

    @Size(max = 1000)
    @Column(name = "rating")
    private String rating;

    @Column(name = "path")
    private String path;

    @Column(name = "bg_image")
    private String bgimage;

    @Column(columnDefinition = "integer default 0")
    private int comments;

    @Column(columnDefinition = "varchar default 'tech'")
    private String base;

    @Column(name = "date")
    private String datePosted;

    @Column(name = "genre")
    private String genre;

    @Column(name = "release_date")
    private String releaseDate;

    public TechArticles(String title, String reviewer, String review, String path, String bgimage, int comments, String base, String datePosted, String genre, String releaseDate){
        this.title = title;
        this.reviewer = reviewer;
        this.review = review;
        this.path = path;
        this.bgimage = bgimage;
        this.comments = comments;
        this.base = base;
        this.datePosted = datePosted;
        this.genre = genre;
        this.releaseDate = releaseDate;
    }
}
