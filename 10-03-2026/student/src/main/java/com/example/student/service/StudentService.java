package com.example.student.service;

import org.springframework.stereotype.Service;

import com.example.student.dto.RESPONSE.StudentResponse;
import com.example.student.dto.REQUEST.StudentRequest;

@Service
public class StudentService {

    public StudentResponse calculateStudentResponse(StudentRequest req) {

        int total = req.getMarks1() + req.getMarks2() + req.getMarks3()
                + req.getMarks4() + req.getMarks5();

        double percentage = total / 5.0;

        String result = percentage >= 75 ? "Pass" : "Fail";

        return new StudentResponse(
                req.getName(),
                req.getRollnumber(),
                total,
                percentage,
                result);
    }
}