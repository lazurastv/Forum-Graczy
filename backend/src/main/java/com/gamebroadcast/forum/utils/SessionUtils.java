package com.gamebroadcast.forum.utils;

import com.gamebroadcast.forum.user.schemas.AppUser;

import org.springframework.security.core.context.SecurityContextHolder;

public class SessionUtils {

    public static AppUser getUserFromSession() {
        return (AppUser) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
    }
}
