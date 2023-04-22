package com.example.GameReviewz.polls;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import javax.transaction.Transactional;

public interface PollsRepository extends JpaRepository<Polls,Long> {
    @Transactional
    @Modifying
    @Query(value = "UPDATE polls SET option_1_votes = option_1_votes + 1 WHERE id = (SELECT max(id) FROM polls) ", nativeQuery = true)
    void updateOption1();
    @Transactional
    @Modifying
    @Query(value = "UPDATE polls SET option_2_votes = option_2_votes + 1 WHERE id = (SELECT max(id) FROM polls) ", nativeQuery = true)
    void updateOption2();
    @Transactional
    @Modifying
    @Query(value = "UPDATE polls SET option_3_votes = option_3_votes + 1 WHERE id = (SELECT max(id) FROM polls) ", nativeQuery = true)
    void updateOption3();
    @Transactional
    @Modifying
    @Query(value = "UPDATE polls SET option_4_votes = option_4_votes + 1 WHERE id = (SELECT max(id) FROM polls) ", nativeQuery = true)
    void updateOption4();

}
