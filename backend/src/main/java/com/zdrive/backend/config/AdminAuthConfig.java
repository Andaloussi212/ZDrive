package com.zdrive.backend.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Component
public class AdminAuthConfig {

    @Value("${zdrive.admin.password}")
    private String adminPassword;

    public boolean isValidPassword(String password) {
        return adminPassword.equals(password);
    }
}
