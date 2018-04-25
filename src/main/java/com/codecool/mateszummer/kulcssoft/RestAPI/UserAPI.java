package com.codecool.mateszummer.kulcssoft.RestAPI;

import com.codecool.mateszummer.kulcssoft.Service.UserService;
import com.google.gson.Gson;
import org.hibernate.HibernateException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.sql.SQLException;

@RestController
public class UserAPI {

    @Autowired
    UserService userService;

    @RequestMapping(value = "/api/getAllUsers", method = RequestMethod.POST)
    public String getAllUsers() {
        Gson gson = new Gson();
        try {
            return gson.toJson(userService.getAllUsers());
        } catch (DataAccessException e) {
            return "bad";
        }

    }

    @RequestMapping(value = "/api/addUser", method = RequestMethod.POST)
    public String addUser(@RequestParam("userName") String userName,
                          @RequestParam("userEmail") String userEmail) {
        try {
            userService.addUser(userName, userEmail);
            return "ok";
        } catch (DataAccessException e) {
            return "bad";
        }
    }

    @RequestMapping(value = "/api/deleteUser", method = RequestMethod.POST)
    public String deleteUser(@RequestParam("userId") Integer userId) {
        try {
            userService.deleteUser(userId);
        } catch (EmptyResultDataAccessException e) {
            return "bad id";
        } catch (DataAccessException e) {
            return "bad";
        }
        return "ok";
    }
}
