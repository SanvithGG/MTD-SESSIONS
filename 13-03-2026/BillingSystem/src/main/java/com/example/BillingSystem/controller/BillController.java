package com.example.BillingSystem.controller;

import com.example.BillingSystem.dto.request.BillRequest;
import com.example.BillingSystem.dto.response.BillResponse;
import com.example.BillingSystem.service.BillService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/bills")
public class BillController {
    
    @Autowired
    private BillService billService;
    
    @PostMapping
    public ResponseEntity<BillResponse> createBill(@RequestBody BillRequest request) {
        BillResponse response = billService.createBill(request);
        return new ResponseEntity<>(response, HttpStatus.CREATED);
    }
    
    @GetMapping
    public ResponseEntity<List<BillResponse>> getAllBills() {
        List<BillResponse> bills = billService.getAllBills();
        return ResponseEntity.ok(bills);
    }
    
    @GetMapping("/{id}")
    public ResponseEntity<BillResponse> getBillById(@PathVariable Long id) {
        BillResponse response = billService.getBillById(id);
        return ResponseEntity.ok(response);
    }
    
    @PutMapping("/{id}")
    public ResponseEntity<BillResponse> updateBill(@PathVariable Long id, @RequestBody BillRequest request) {
        BillResponse response = billService.updateBill(id, request);
        return ResponseEntity.ok(response);
    }
    
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteBill(@PathVariable Long id) {
        billService.deleteBill(id);
        return ResponseEntity.noContent().build();
    }
}
