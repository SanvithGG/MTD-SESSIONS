package com.example.BillingSystem.dto.response;

public class ProductResponse {
    
    private Long id;
    private Long billId;
    private String prodName;
    private Integer prodQty;
    private Double prodMrp;
    private Double prodTax;
    private Double prodTotal;
    
    public ProductResponse() {}
    
    public ProductResponse(Long id, Long billId, String prodName, Integer prodQty, Double prodMrp, Double prodTax, Double prodTotal) {
        this.id = id;
        this.billId = billId;
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
    
    public Long getBillId() {
        return billId;
    }
    
    public void setBillId(Long billId) {
        this.billId = billId;
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
