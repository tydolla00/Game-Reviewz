package com.example.GameReviewz.Exceptions;

public class ArticleNotFoundException extends RuntimeException{
    String message;

    public ArticleNotFoundException(String message){
        this.message = message;
    }

    @Override
    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}
