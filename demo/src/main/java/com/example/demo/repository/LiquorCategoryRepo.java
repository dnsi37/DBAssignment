package com.example.demo.repository;

import com.example.demo.entity.Liquor_category;

import org.springframework.data.jpa.repository.JpaRepository;

public interface LiquorCategoryRepo extends JpaRepository<Liquor_category,Integer> {
}
