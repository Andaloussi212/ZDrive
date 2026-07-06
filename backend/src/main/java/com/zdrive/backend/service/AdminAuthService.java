package com.zdrive.backend.service;

import org.springframework.stereotype.Service;

import com.zdrive.backend.config.AdminAuthConfig;

@Service
public class AdminAuthService {

    private final AdminAuthConfig adminAuthConfig;

    public AdminAuthService(AdminAuthConfig adminAuthConfig) {
        this.adminAuthConfig = adminAuthConfig;
    }

    public boolean isAuthorized(String adminPassword) {
        return adminAuthConfig.isValidPassword(adminPassword);
    }
}
