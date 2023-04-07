package com.example.GameReviewz.contact;

import com.example.GameReviewz.Exceptions.ArticleNotFoundException;
import com.example.GameReviewz.articles.reviews.Reviews;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ContactService {
    ContactRepository contactRepository;
    public ContactForm addForm(ContactForm contactForm) {
        try{
            return contactRepository.save(new ContactForm(contactForm.getEmail(), contactForm.getFullName(), contactForm.getUserName(), contactForm.getMessage(), contactForm.getSubject()));
        }
        catch (Exception e){
            throw new ArticleNotFoundException("Bad Request");
        }
    }
}
