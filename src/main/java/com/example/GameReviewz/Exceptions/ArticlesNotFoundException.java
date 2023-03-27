package com.example.GameReviewz.Exceptions;

public class ArticlesNotFoundException extends RuntimeException{
    String message;

    public ArticlesNotFoundException (String message){
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
