package com.codecool.mateszummer.kulcssoft.Repository;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String UserEmail;

    private String UserName;


    public User(String userEmail, String userName) {
        UserEmail = userEmail;
        UserName = userName;
    }

    public Integer getId() {
        return id;
    }

    public String getUserEmail() {
        return UserEmail;
    }

    public String getUserName() {
        return UserName;
    }
}
