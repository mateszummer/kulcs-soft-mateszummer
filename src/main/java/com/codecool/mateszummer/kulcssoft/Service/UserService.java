package com.codecool.mateszummer.kulcssoft.Service;

import com.codecool.mateszummer.kulcssoft.Model.User;
import com.codecool.mateszummer.kulcssoft.Repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    @Autowired
    UserRepo userRepo;

    public void deleteUser(Integer userId) {
        userRepo.delete(userId);
    }

    public List<User> getAllUsers() {
        return userRepo.findAll();
    }

    public void addUser(String userName, String userEmail) {
        userRepo.save(new User(userEmail,userName));
    }
}
