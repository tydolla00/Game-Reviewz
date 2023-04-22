package com.example.GameReviewz.contact;

import com.example.GameReviewz.Exceptions.ArticleNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ContactService {

    @Autowired
    ContactRepository contactRepository;
    public ContactForm addForm(ContactForm contactForm) {
        try{
            return contactRepository.save(new ContactForm(contactForm.getFullname(),
                    contactForm.getUsername(), contactForm.getEmail(),
                    contactForm.getMessage(), contactForm.getSubject()));
        }
        catch (Exception e){
            throw new ArticleNotFoundException("Bad Request");
        }
    }
}
