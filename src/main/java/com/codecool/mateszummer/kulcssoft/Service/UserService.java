package com.codecool.mateszummer.kulcssoft.Service;

import com.codecool.mateszummer.kulcssoft.Model.User;
import com.codecool.mateszummer.kulcssoft.Repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    UserRepo userRepo;

    public String deleteUser(Integer userId) {
        try {
            userRepo.delete(userId);
        } catch (EmptyResultDataAccessException e) {
            return "No user with id: " + userId + " !";
        } catch (Exception e) {
            return "Sorry, we are having and issue with the database! Try again later!";
        }
        return "ok";
    }
}
