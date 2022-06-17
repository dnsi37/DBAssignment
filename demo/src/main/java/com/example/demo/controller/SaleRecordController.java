package com.example.demo.controller;

import com.example.demo.dto.CreateOrderDto;
import com.example.demo.entity.Customers;
import com.example.demo.entity.Orders;
import com.example.demo.repository.CustomersRepo;
import com.example.demo.repository.LiquorsRepo;
import com.example.demo.repository.OrdersRepo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/sale")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class SaleRecordController {

    private OrdersRepo ordersRepo ;
    private CustomersRepo customersRepo;
    private LiquorsRepo liquorsRepo;

    @Autowired
    public  SaleRecordController(OrdersRepo ordersRepo,CustomersRepo customersRepo, LiquorsRepo liquorsRepo){
        this.ordersRepo = ordersRepo;
        this.customersRepo = customersRepo;
        this.liquorsRepo = liquorsRepo;
    }
    @GetMapping("/get")
    public List<Orders> findAll() {
        return ordersRepo.findAll();
    }

    @PostMapping("/create")
    public Orders create(@RequestBody CreateOrderDto createOrderDto) {
        Orders newOrder = createOrderDto.toEntity();
        newOrder.addCustomer(customersRepo.findById(createOrderDto.getCustomer_id()).orElseThrow());
        newOrder.addLiquor(liquorsRepo.findById(createOrderDto.getLiquor_id()).orElseThrow());
        return  newOrder;
    }
    @GetMapping("/delete")
    public String delete (@RequestParam String id) {
        try {
            ordersRepo.deleteById(Integer.parseInt(id));
            return "Delete success";
        }catch(Exception e){
            return  e.toString();
        }
    }




}
