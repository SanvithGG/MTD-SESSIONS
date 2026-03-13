package com.example.BillingSystem.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.BillingSystem.entity.ProductEntity;

public interface ProductRepository extends JpaRepository<ProductEntity, Long> {
    
}
