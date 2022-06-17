package com.example.demo.controller;

import com.example.demo.dto.CreateOrderDto;
import com.example.demo.dto.CreateStockDto;
import com.example.demo.entity.Orders;
import com.example.demo.entity.Stocks;
import com.example.demo.repository.LiquorsRepo;
import com.example.demo.repository.StocksRepo;

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
@RequestMapping("/api/stocks")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class StocksController {

    private StocksRepo stocksRepo;
    private LiquorsRepo liquorsRepo;

    @Autowired
    public StocksController ( StocksRepo stocksRepo , LiquorsRepo liquorsRepo){
        this.stocksRepo = stocksRepo;
        this.liquorsRepo = liquorsRepo;
    }

    @GetMapping("/get")
    public List<Stocks> findAll() {
        return stocksRepo.findAll();
    }

    @PostMapping("/create")
    public Stocks create(@RequestBody CreateStockDto createStockDto) {
        Stocks newStock = createStockDto.toEntity();
        newStock.addLiquor(liquorsRepo.findById(createStockDto.getLiquor_id()).orElseThrow());
        return  newStock;
    }
    @GetMapping("/delete")
    public String delete (@RequestParam String id) {
        try {
            stocksRepo.deleteById(Integer.parseInt(id));
            return "Delete success";
        }catch(Exception e){
            return  e.toString();
        }
    }



}
