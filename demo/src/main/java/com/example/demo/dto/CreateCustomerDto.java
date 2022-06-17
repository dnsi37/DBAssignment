package com.example.demo.dto;


import com.example.demo.entity.Customers;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class CreateCustomerDto {

    private String name;

    public String getName() {
        return name;
    }

    public String getPhone_num() {
        return phone_num;
    }

    private String phone_num;

    @Builder
    CreateCustomerDto(String name , String phone_num){
        this.name = name;
        this.phone_num = phone_num;
    }

    public Customers toEntity () {
        return new Customers(name,phone_num);
    }
}
