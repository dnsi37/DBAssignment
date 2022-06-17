package com.example.demo.dto;


import com.example.demo.entity.Stocks;

import lombok.Getter;
import lombok.NoArgsConstructor;

@NoArgsConstructor
public class CreateStockDto {


    public int getLiquor_id() {
        return liquor_id;
    }

    public int getQty() {
        return qty;
    }

    public String getLocation() {
        return location;
    }

    private int liquor_id ;

    private int qty ;

    private String location ;

    public Stocks toEntity() {
        Stocks stock = new Stocks(qty,location);

        return stock;
    }



}
