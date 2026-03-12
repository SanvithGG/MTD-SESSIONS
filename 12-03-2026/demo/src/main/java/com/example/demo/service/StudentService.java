package com.example.demo.service;

import org.springframework.stereotype.Service;

import com.example.demo.dto.RESPONSE.StudentResponse;
import com.example.demo.entity.RegisterNumber;
import com.example.demo.entity.Student;
import com.example.demo.repository.RegisterNumberRepository;
import com.example.demo.repository.StudentRepository;

@Service
public class StudentService {

    private final StudentRepository studentRepository;
    private final RegisterNumberRepository registerNumberRepository;

    public StudentService(StudentRepository studentRepository,RegisterNumberRepository registerNumberRepository) {
        this.studentRepository = studentRepository;
        this.registerNumberRepository = registerNumberRepository;
    }

    public StudentResponse assignRegistration(Long studentId, String regNumber)
    {

        Student student = studentRepository.findById(studentId)
                .orElseThrow(() -> new RuntimeException("Student not found with id: " + studentId));

        RegisterNumber register = new RegisterNumber();
        register.setRegno(regNumber);
        registerNumberRepository.save(register);

        student.setRegisterNumber(register);

        studentRepository.save(student);

        return new StudentResponse(
                student.getId(),
                student.getName(),
                register.getRegno()
        );
    }
}