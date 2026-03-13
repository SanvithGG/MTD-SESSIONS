package com.example.BillingSystem.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "products")
public class ProductEntity {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @ManyToOne
    @JoinColumn(name = "bill_id", nullable = false)
    private BillEntity bill;
    
    @Column(name = "prod_name")
    private String prodName;
    
    @Column(name = "prod_qty")
    private Integer prodQty;
    
    @Column(name = "prod_mrp")
    private Double prodMrp;
    
    @Column(name = "prod_tax")
    private Double prodTax;
    
    @Column(name = "prod_total")
    private Double prodTotal;
    
    public ProductEntity() {}
    
    public ProductEntity(Long id, BillEntity bill, String prodName, Integer prodQty, Double prodMrp, Double prodTax, Double prodTotal) {
        this.id = id;
        this.bill = bill;
        this.prodName = prodName;
        this.prodQty = prodQty;
        this.prodMrp = prodMrp;
        this.prodTax = prodTax;
        this.prodTotal = prodTotal;
    }
    
    public Long getId() {
        return id;
    }
    
    public void setId(Long id) {
        this.id = id;
    }
    
    public BillEntity getBill() {
        return bill;
    }
    
    public void setBill(BillEntity bill) {
        this.bill = bill;
    }
    
    public String getProdName() {
        return prodName;
    }
    
    public void setProdName(String prodName) {
        this.prodName = prodName;
    }
    
    public Integer getProdQty() {
        return prodQty;
    }
    
    public void setProdQty(Integer prodQty) {
        this.prodQty = prodQty;
    }
    
    public Double getProdMrp() {
        return prodMrp;
    }
    
    public void setProdMrp(Double prodMrp) {
        this.prodMrp = prodMrp;
    }
    
    public Double getProdTax() {
        return prodTax;
    }
    
    public void setProdTax(Double prodTax) {
        this.prodTax = prodTax;
    }
    
    public Double getProdTotal() {
        return prodTotal;
    }
    
    public void setProdTotal(Double prodTotal) {
        this.prodTotal = prodTotal;
    }
}
