package auth;



import model.User.UserRole;
import lombok.Data;

@Data
public class RegisterRequest {
    private String name;
    private String email;
    private String password;
    private String confirmPassword;
    private UserRole role;
}

// LoginRequest.java
package com.jobseeking.dto.auth;

import lombok.Data;

@Data
public class LoginRequest {
    private String email;
    private String password;
}

// AuthResponse.java
package com.jobseeking.dto.auth;

import com.jobseeking.model.User.UserRole;
import lombok.Data;

@Data
public class AuthResponse {
    private String token;
    private UserRole role;
    private String name;
}