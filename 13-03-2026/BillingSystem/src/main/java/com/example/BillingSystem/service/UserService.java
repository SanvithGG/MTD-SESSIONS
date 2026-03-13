package com.example.BillingSystem.service;

import com.example.BillingSystem.dto.request.UserRequest;
import com.example.BillingSystem.dto.response.UserResponse;
import com.example.BillingSystem.entity.UserEntity;
import com.example.BillingSystem.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class UserService {
    
    @Autowired
    private UserRepository userRepository;
    
    public UserResponse createUser(UserRequest request) {
        UserEntity user = new UserEntity();
        user.setName(request.getName());
        UserEntity savedUser = userRepository.save(user);
        return mapToResponse(savedUser);
    }
    
    public List<UserResponse> getAllUsers() {
        return userRepository.findAll().stream()
                .map(this::mapToResponse)
                .collect(Collectors.toList());
    }
    
    public UserResponse getUserById(Long id) {
        UserEntity user = userRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("User not found with id: " + id));
        return mapToResponse(user);
    }
    
    public UserResponse updateUser(Long id, UserRequest request) {
        UserEntity user = userRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("User not found with id: " + id));
        user.setName(request.getName());
        UserEntity updatedUser = userRepository.save(user);
        return mapToResponse(updatedUser);
    }
    
    public void deleteUser(Long id) {
        if (!userRepository.existsById(id)) {
            throw new RuntimeException("User not found with id: " + id);
        }
        userRepository.deleteById(id);
    }
    
    private UserResponse mapToResponse(UserEntity user) {
        return new UserResponse(user.getId(), user.getName());
    }
}
