package com.example.demo.controller;

import org.springframework.web.bind.annotation.*;

import com.example.demo.dto.RESPONSE.APIREsponse;
import com.example.demo.dto.RESPONSE.StudentResponse;
import com.example.demo.service.StudentService;
import com.example.demo.dto.REQUEST.AssignRegisterRequest;

@RestController
@RequestMapping("/student")
public class StudentController {

    private final StudentService studentService;

    public StudentController(StudentService studentService) {
        this.studentService = studentService;
    }

   @PostMapping("/{id}/register")
public APIREsponse<StudentResponse> assignRegistration(
        @PathVariable Long id,
        @RequestBody AssignRegisterRequest request
) {
    StudentResponse response =
            studentService.assignRegistration(id, request.getRegNumber());

    return new APIREsponse<>("success", response);
}
}