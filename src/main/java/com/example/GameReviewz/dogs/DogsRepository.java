package com.example.GameReviewz.dogs;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DogsRepository extends JpaRepository<Dogs,Integer> {

}
