package com.example.GameReviewz.contact;

import jakarta.persistence.*;
import jakarta.validation.constraints.Size;
import lombok.*;

@NoArgsConstructor(force = true)
@AllArgsConstructor
@ToString
@Getter
@Setter
@Entity
@Table(name = "contact")

public class ContactForm {
    public ContactForm(String fullName, String userName, String email, String subject, String message) {
        this.fullName = fullName;
        this.userName = userName;
        this.email = email;
        this.subject = subject;
        this.message = message;
    }
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @NonNull
    @Column(name = "full_name")
    private String fullName;

    @NonNull
    @Column(name = "user_name")
    private String userName;

    @NonNull
    @Column(name = "email")
    private String email;

    @Size(min=1, max = 50)
    @NonNull
    @Column(name = "subject")
    private String subject;
    @Size(min=1, max = 300)
    @NonNull
    @Column(name = "message")
    private String message;
}
