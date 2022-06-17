package com.example.demo.repository;

import com.example.demo.entity.Customers;

import org.springframework.data.jpa.repository.JpaRepository;

public interface CustomersRepo extends JpaRepository<Customers,Integer> {
}
