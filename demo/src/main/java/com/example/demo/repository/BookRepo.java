package com.example.demo.repository;

import com.example.demo.entity.SampleEntity;

import org.springframework.data.jpa.repository.JpaRepository;

public interface BookRepo extends JpaRepository<SampleEntity,String> {

}


