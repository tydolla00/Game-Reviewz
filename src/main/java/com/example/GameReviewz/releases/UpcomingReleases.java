package com.example.GameReviewz.releases;

import lombok.*;

import javax.persistence.*;

@NoArgsConstructor
@AllArgsConstructor
@ToString
@Getter
@Setter
@Entity
@Table(name = "releases")

public class UpcomingReleases {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(name = "product")
    private String product;

    @Column(name = "release_date")
    private String releaseDate;

    @Column(name = "base")
    private String base;
}


