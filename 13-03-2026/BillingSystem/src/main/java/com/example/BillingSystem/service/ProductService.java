package com.example.BillingSystem.service;

import com.example.BillingSystem.dto.request.ProductRequest;
import com.example.BillingSystem.dto.response.ProductResponse;
import com.example.BillingSystem.entity.BillEntity;
import com.example.BillingSystem.entity.ProductEntity;
import com.example.BillingSystem.repository.BillRepository;
import com.example.BillingSystem.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class ProductService {
    
    @Autowired
    private ProductRepository productRepository;
    
    @Autowired
    private BillRepository billRepository;
    
    public ProductResponse createProduct(ProductRequest request) {
        BillEntity bill = billRepository.findById(request.getBillId())
                .orElseThrow(() -> new RuntimeException("Bill not found with id: " + request.getBillId()));
        
        ProductEntity product = new ProductEntity();
        product.setBill(bill);
        product.setProdName(request.getProdName());
        product.setProdQty(request.getProdQty());
        product.setProdMrp(request.getProdMrp());
        product.setProdTax(request.getProdTax());
        product.setProdTotal(request.getProdTotal());
        
        ProductEntity savedProduct = productRepository.save(product);
        return mapToResponse(savedProduct);
    }
    
    public List<ProductResponse> getAllProducts() {
        return productRepository.findAll().stream()
                .map(this::mapToResponse)
                .collect(Collectors.toList());
    }
    
    public ProductResponse getProductById(Long id) {
        ProductEntity product = productRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Product not found with id: " + id));
        return mapToResponse(product);
    }
    
    public ProductResponse updateProduct(Long id, ProductRequest request) {
        ProductEntity product = productRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Product not found with id: " + id));
        
        BillEntity bill = billRepository.findById(request.getBillId())
                .orElseThrow(() -> new RuntimeException("Bill not found with id: " + request.getBillId()));
        
        product.setBill(bill);
        product.setProdName(request.getProdName());
        product.setProdQty(request.getProdQty());
        product.setProdMrp(request.getProdMrp());
        product.setProdTax(request.getProdTax());
        product.setProdTotal(request.getProdTotal());
        
        ProductEntity updatedProduct = productRepository.save(product);
        return mapToResponse(updatedProduct);
    }
    
    public void deleteProduct(Long id) {
        if (!productRepository.existsById(id)) {
            throw new RuntimeException("Product not found with id: " + id);
        }
        productRepository.deleteById(id);
    }
    
    private ProductResponse mapToResponse(ProductEntity product) {
        return new ProductResponse(
                product.getId(),
                product.getBill().getId(),
                product.getProdName(),
                product.getProdQty(),
                product.getProdMrp(),
                product.getProdTax(),
                product.getProdTotal()
        );
    }
}
