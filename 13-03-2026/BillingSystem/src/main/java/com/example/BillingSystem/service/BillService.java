package com.example.BillingSystem.service;

import com.example.BillingSystem.dto.request.BillRequest;
import com.example.BillingSystem.dto.response.BillResponse;
import com.example.BillingSystem.entity.BillEntity;
import com.example.BillingSystem.entity.UserEntity;
import com.example.BillingSystem.repository.BillRepository;
import com.example.BillingSystem.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class BillService {
    
    @Autowired
    private BillRepository billRepository;
    
    @Autowired
    private UserRepository userRepository;
    
    public BillResponse createBill(BillRequest request) {
        UserEntity user = userRepository.findById(request.getUserId())
                .orElseThrow(() -> new RuntimeException("User not found with id: " + request.getUserId()));
        
        BillEntity bill = new BillEntity();
        bill.setUser(user);
        BillEntity savedBill = billRepository.save(bill);
        return mapToResponse(savedBill);
    }
    
    public List<BillResponse> getAllBills() {
        return billRepository.findAll().stream()
                .map(this::mapToResponse)
                .collect(Collectors.toList());
    }
    
    public BillResponse getBillById(Long id) {
        BillEntity bill = billRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Bill not found with id: " + id));
        return mapToResponse(bill);
    }
    
    public BillResponse updateBill(Long id, BillRequest request) {
        BillEntity bill = billRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Bill not found with id: " + id));
        
        UserEntity user = userRepository.findById(request.getUserId())
                .orElseThrow(() -> new RuntimeException("User not found with id: " + request.getUserId()));
        
        bill.setUser(user);
        BillEntity updatedBill = billRepository.save(bill);
        return mapToResponse(updatedBill);
    }
    
    public void deleteBill(Long id) {
        if (!billRepository.existsById(id)) {
            throw new RuntimeException("Bill not found with id: " + id);
        }
        billRepository.deleteById(id);
    }
    
    private BillResponse mapToResponse(BillEntity bill) {
        return new BillResponse(
                bill.getId(),
                bill.getUser().getId(),
                bill.getUser().getName()
        );
    }
}
