package com.example.studeni_val.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.Data;

@Data
@Entity
public class StudentEntity 
{
    @Id
    @GeneratedValue
    private Long id;
    private String name;
    private String email;
    private int age;
}
