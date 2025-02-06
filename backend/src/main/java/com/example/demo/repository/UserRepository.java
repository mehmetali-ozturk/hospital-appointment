package com.example.demo.repository;

import org.springframework.stereotype.Repository;

import com.example.demo.model.User;

@Repository
public class UserRepository {
    public User findUserByEmail(String email) {
        User user = new User(email, "123456");
        user.setFirstname("FirstName");
        user.setLastName("LastName");
        return user;
    }
}
