package com.gamebroadcast.forum.user.models;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

import com.gamebroadcast.forum.exceptions.InvalidInputException;

import org.springframework.context.support.BeanDefinitionDsl.Role;

public class UserValidators {
    public static boolean checkUsername(String username) {
        final String USERNAME_PATTERN = "^[\\p{L}]+([\\p{L}0-9_-]+)$";
        Pattern pattern = Pattern.compile(USERNAME_PATTERN);
        Matcher matcher = pattern.matcher(username);
        if (username == null) {
            throw new InvalidInputException("Username is required.");
        } else if (username.length() < 3) {
            throw new InvalidInputException("Username is too short.");
        } else if (username.length() > 32) {
            throw new InvalidInputException("Username is too long.");
        } else if (!matcher.matches()) {
            throw new InvalidInputException("Invalid username");
        }
        return true;
    }

    public static boolean checkEmail(String email) {
        final String EMAIL_PATTERN = "^(?=.{1,64}@)[\\p{L}0-9_-]+(\\.[\\p{L}0-9_-]+)*@"
        + "[^-][\\p{L}0-9-]+(\\.[\\p{L}0-9-]+)*(\\.[\\p{L}]{2,})$";
        Pattern pattern = Pattern.compile(EMAIL_PATTERN);
        Matcher matcher = pattern.matcher(email);
        if (email == null) {
            throw new InvalidInputException("Email is required.");
        } else if (!matcher.matches()) {
            throw new InvalidInputException("Invalid email.");
        }
        return true;
    }

    public static boolean checkPassword(String password) {
        final String PASSWORD_PATTERN = "^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])" 
        + "(?=.*[@#$%^&+=\\-_?])(?=\\S+$).{8,}$";
        Pattern pattern = Pattern.compile(PASSWORD_PATTERN);
        Matcher matcher = pattern.matcher(password);
        if (password == null) {
            throw new InvalidInputException("Password is required.");
        } else if (password.length() < 1) {
            throw new InvalidInputException("Password is too short.");
        } else if (!matcher.matches()) {
            throw new InvalidInputException("Invalid password.");
        }
        return true;
    }

    public static boolean checkPasswordMatch(String password, String repeatPassword) {
        if(!password.equals(repeatPassword)) {
            throw new InvalidInputException("Passwords don't match.");
        }
        return true;
    }

    public static boolean checkShortDescription(String shortDescription) {
        return true;
    }

    public static boolean checkRole(String role) {
        for (Role e : Role.values()) {
            if (role.equals(e.name())) {
                return true;
            }
        }
        throw new InvalidInputException("Such role doesn't exist.");
    }
}