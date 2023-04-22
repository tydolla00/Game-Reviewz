package com.example.GameReviewz.contact;

import javax.persistence.*;
import javax.validation.constraints.Size;
import lombok.*;

@NoArgsConstructor(force = true)
@AllArgsConstructor
@ToString
@Getter
@Setter
@Entity
@Table(name = "contact")

public class ContactForm {
    public ContactForm(String fullname, String username, String email, String subject, String message) {
        this.fullname = fullname;
        this.username = username;
        this.email = email;
        this.subject = subject;
        this.message = message;
    }
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @NonNull
    @Column(name = "full_name")
    private String fullname;

    @NonNull
    @Column(name = "user_name")
    private String username;

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
