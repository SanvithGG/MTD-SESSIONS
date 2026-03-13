package com.example.BillingSystem.dto.request;

public class BillRequest
{
    private Long userId;
    
    public BillRequest() {}
    
    public BillRequest(Long userId) {
        this.userId = userId;
    }
    
    public Long getUserId() {
        return userId;
    }
    
    public void setUserId(Long userId) {
        this.userId = userId;
    }
}
