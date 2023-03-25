package com.example.GameReviewz.Exceptions;

public class AuthenticationInvalidException extends RuntimeException{
    String message;

    public AuthenticationInvalidException(String message){
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
