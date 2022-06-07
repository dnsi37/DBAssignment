package com.example.demo.controller;

import com.example.demo.entity.SampleEntity;
import com.example.demo.repository.BookRepo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.awt.print.Book;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/")
public class SampleController {

	private final BookRepo bookRepo;

	@PersistenceContext
	private EntityManager entityManager;

	@Autowired
	public SampleController (BookRepo bookRepo){
		this.bookRepo = bookRepo;
	}

	@GetMapping("search")
	public String searchAllMember() {
		System.out.println("LOOOG"+bookRepo.findAll().toString());
		return bookRepo.findAll().toString();

	}

    
}
