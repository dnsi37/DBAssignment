package com.example.demo.repository;

import com.example.demo.entity.Liquors;

import org.springframework.data.jpa.repository.JpaRepository;

public interface LiquorsRepo extends JpaRepository<Liquors,Integer> {
}
