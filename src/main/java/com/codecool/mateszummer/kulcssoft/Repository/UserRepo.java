package com.codecool.mateszummer.kulcssoft.Repository;

import com.codecool.mateszummer.kulcssoft.Model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepo extends JpaRepository<User, Integer> {

}