package com.example.GameReviewz.UserAuthentication;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface RoleRepository extends JpaRepository<Roles,Long> {
    Optional<Role> findByName(Role name);
}
