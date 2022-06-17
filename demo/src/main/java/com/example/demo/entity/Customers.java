package com.example.demo.entity;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity(name = "Customers")
@ToString

public class Customers {

    @Id
    @GeneratedValue( strategy = GenerationType.IDENTITY )
    @Column(nullable = false)
    private int customer_id;

    @Column(nullable = false)
    private String name;

    public int getCustomer_id() {
        return customer_id;
    }

    public String getName() {
        return name;
    }

    public String getPhone_num() {
        return phone_num;
    }

    @Column(nullable = false)
    private String phone_num;

    @Builder
    public Customers(String name , String phone_num){
        this.name = name;
        this.phone_num = phone_num;
    }

    public void updateName(String name) {
        this.name = name;
    }
    public void updatePhoneNum (String phone_num){
        this.phone_num = phone_num;
    }


}
