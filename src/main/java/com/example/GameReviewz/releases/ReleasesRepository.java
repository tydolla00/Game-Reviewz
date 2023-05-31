package com.example.GameReviewz.releases;

import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.JpaRepository;

@Repository
public interface ReleasesRepository extends JpaRepository<UpcomingReleases, Long> {
}
