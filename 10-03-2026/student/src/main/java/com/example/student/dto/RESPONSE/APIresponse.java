package com.example.student.dto.RESPONSE;

public class APIresponse {
    private String name;
    private StudentResponse data;
    
    public APIresponse(String name, StudentResponse data) {
        this.name = name;
        this.data = data;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public StudentResponse getData() {
        return data;
    }

    public void setData(StudentResponse data) {
        this.data = data;
    }
}
