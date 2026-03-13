package com.example.BillingSystem.entity;

import jakarta.persistence.*;
import java.util.List;

@Entity
@Table(name = "bills")
public class BillEntity {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private UserEntity user;
    
    @OneToMany(mappedBy = "bill", cascade = CascadeType.ALL)
    private List<ProductEntity> products;
    
    public BillEntity() {}
    
    public BillEntity(Long id, UserEntity user) {
        this.id = id;
        this.user = user;
    }
    
    public Long getId() {
        return id;
    }
    
    public void setId(Long id) {
        this.id = id;
    }
    
    public UserEntity getUser() {
        return user;
    }
    
    public void setUser(UserEntity user) {
        this.user = user;
    }
    
    public List<ProductEntity> getProducts() {
        return products;
    }
    
    public void setProducts(List<ProductEntity> products) {
        this.products = products;
    }
}
