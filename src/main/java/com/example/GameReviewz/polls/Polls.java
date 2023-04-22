package com.example.GameReviewz.polls;

import lombok.*;

import javax.persistence.*;

@NoArgsConstructor
@AllArgsConstructor
@ToString
@Getter
@Setter
@Entity
@Table(name = "polls")
public class Polls {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(name = "title")
    private String title;

    @Column(name = "option_1")
    private String option1;
    @Column(name = "option_2")
    private String option2;
    @Column(name = "option_3")
    private String option3;
    @Column(name = "option_4")
    private String option4;

    @Column(name = "option_1_votes", columnDefinition = "integer default 0")
    private Integer option1Votes;
    @Column(name = "option_2_votes", columnDefinition = "integer default 0")
    private Integer option2Votes;
    @Column(name = "option_3_votes", columnDefinition = "integer default 0")
    private Integer option3Votes;
    @Column(name = "option_4_votes", columnDefinition = "integer default 0")
    private Integer option4Votes;

}
