package com.example.demo.dto.RESPONSE;

public class StudentResponse 
{
    private long id;
    private String name;
    private String regno;
    
    public StudentResponse(long id, String name, String regno) {
        this.id = id;
        this.name = name;
        this.regno = regno;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getRegno() {
        return regno;
    }

    public void setRegno(String regno) {
        this.regno = regno;
    }
    
}
