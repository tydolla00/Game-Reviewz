package com.example.GameReviewz.articles;

import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;


@EqualsAndHashCode
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "game_articles")
public class Articles {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;


}
