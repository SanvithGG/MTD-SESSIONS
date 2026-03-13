package com.example.BillingSystem.entity;

import jakarta.persistence.*;
import java.util.List;

@Entity
@Table(name = "users")
public class UserEntity {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    private String name;
    
    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
    private List<BillEntity> bills;
    
    public UserEntity() {}
    
    public UserEntity(Long id, String name) {
        this.id = id;
        this.name = name;
    }
    
    public Long getId() {
        return id;
    }
    
    public void setId(Long id) {
        this.id = id;
    }
    
    public String getName() {
        return name;
    }
    
    public void setName(String name) {
        this.name = name;
    }
    
    public List<BillEntity> getBills() {
        return bills;
    }
    
    public void setBills(List<BillEntity> bills) {
        this.bills = bills;
    }
}
