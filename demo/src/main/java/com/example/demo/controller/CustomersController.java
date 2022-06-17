package com.example.demo.controller;


import com.example.demo.dto.CreateCustomerDto;
import com.example.demo.entity.Customers;
import com.example.demo.repository.CustomersRepo;
import com.fasterxml.jackson.databind.util.JSONPObject;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

import javax.persistence.Id;

@RestController
@RequestMapping(path = "/api/customers")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class CustomersController {

    private final CustomersRepo customersRepo ;

    @Autowired
    public  CustomersController( CustomersRepo customersRepo) { this.customersRepo = customersRepo ;}

    @GetMapping("/get")
    public List<Customers> findAll(){
        return customersRepo.findAll() ;
    }

    @PostMapping("/create")
    public Customers create(@RequestBody CreateCustomerDto createCustomerDto){
        return customersRepo.save(createCustomerDto.toEntity());
    }

    @PostMapping("/update")
    public Customers update(@RequestParam String id,@RequestBody CreateCustomerDto createCustomerDto){

        Customers updateObject = customersRepo.findById(Integer.parseInt(id)).orElseThrow(IllegalArgumentException::new);
        updateObject.updateName(createCustomerDto.getName());
        updateObject.updatePhoneNum(createCustomerDto.getPhone_num());
        customersRepo.save(updateObject);
        return updateObject;
    }

    @GetMapping("delete")
    public String delete (@RequestParam String id){
        System.out.println("id is");
        System.out.println(id);
        try {
            customersRepo.deleteById(Integer.parseInt(id));
            return "Delete success";
        }catch(Exception e){
            return  e.toString();
        }
    }



}
