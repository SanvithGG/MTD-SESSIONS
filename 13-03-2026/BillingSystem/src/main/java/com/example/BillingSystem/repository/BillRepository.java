package com.example.BillingSystem.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.BillingSystem.entity.BillEntity;

public interface BillRepository extends JpaRepository<BillEntity, Long> {
    
}
