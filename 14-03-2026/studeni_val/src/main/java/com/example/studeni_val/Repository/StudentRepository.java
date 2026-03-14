package com.example.studeni_val.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.studeni_val.entity.StudentEntity;

public interface StudentRepository extends JpaRepository<StudentEntity, Long> 
{  
}
    