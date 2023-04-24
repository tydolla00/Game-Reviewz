package com.example.GameReviewz.UserAuthentication;


import com.example.GameReviewz.UserAuthentication.authentication.Provider;
import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
import lombok.*;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.*;

@Builder
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Getter
@Setter
@Entity
@Table(name="users")
public class User implements UserDetails {

    @Id
    @GeneratedValue
    private Integer id;

    private String firstName;
    private String lastName;

    @NotBlank
    @Size(min=6, max = 26)
    @Column(nullable = false, unique = true)
    private String username; //Todo check if username exists, should be unique.

    @Email
    @NotBlank
    @Column(nullable = false, unique = true)
    private String email; //Todo check if email exists, should be unique.

    @NotBlank
    @Size(min = 6, max = 65)
    private String password;

    @Column(columnDefinition = "boolean default false")
    private boolean voted;

    @Enumerated(EnumType.STRING)
    private Role role;

    @Enumerated(EnumType.STRING)
    private Provider provider;

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return List.of(new SimpleGrantedAuthority(role.name()));
    }
    public User(Integer id, String firstName, String lastName, String email, String username, Role role){
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.username = username;
        this.role = Role.USER;
    }
    @Override
    public String getUsername() {
        return email;
    }

    public String getRealUsername(){return username;}

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }

}
