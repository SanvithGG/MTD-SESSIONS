package com.example.BillingSystem.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.BillingSystem.entity.UserEntity;

public interface UserRepository extends JpaRepository<UserEntity, Long> {
    
}
