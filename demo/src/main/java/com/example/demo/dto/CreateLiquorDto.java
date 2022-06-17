package com.example.demo.dto;


import com.example.demo.entity.Liquor_category;
import com.example.demo.entity.Liquors;

import javax.persistence.Column;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class CreateLiquorDto {

    private String name;

    private String country;

    private int unit_price;

    public String getName() {
        return name;
    }

    public String getCountry() {
        return country;
    }

    public int getUnit_price() {
        return unit_price;
    }

    public int getCategory_id() {
        return category_id;
    }

    private int category_id ;

    public Liquors toEntity(){
        Liquors entity = new Liquors(name,country,unit_price);
        return  entity;
    }

}
