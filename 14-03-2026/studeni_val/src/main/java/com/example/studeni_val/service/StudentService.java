package com.example.studeni_val.service;

import org.springframework.stereotype.Service;

import com.example.studeni_val.Repository.StudentRepository;
import com.example.studeni_val.dto.StudentRequest;
import com.example.studeni_val.entity.StudentEntity;

@Service
public class StudentService
{
    private final StudentRepository studentRepository;

    public StudentService(StudentRepository studentRepository)
    {
        this.studentRepository = studentRepository;
    }

    public void saveStudent(StudentRequest request)
    {
        StudentEntity studentEntity = new StudentEntity();
        studentEntity.setName(request.getName());
        studentEntity.setEmail(request.getEmail());
        studentEntity.setAge(request.getAge());
        studentRepository.save(studentEntity);
    }
    
}
