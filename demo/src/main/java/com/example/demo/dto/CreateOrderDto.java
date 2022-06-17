package com.example.demo.dto;


import com.example.demo.entity.Customers;
import com.example.demo.entity.Liquors;
import com.example.demo.entity.Orders;

import java.sql.Timestamp;

import javax.persistence.Column;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class CreateOrderDto {


    public int getCustomer_id() {
        return customer_id;
    }

    public int getLiquor_id() {
        return liquor_id;
    }

    public int getQty() {
        return qty;
    }

    public int getTotal_cost() {
        return total_cost;
    }

    private int customer_id;

    private int liquor_id;

    private int qty;

    private  int total_cost;

    public Orders toEntity() {
        Orders order = new Orders(qty,total_cost);
        return order;
    }

}
