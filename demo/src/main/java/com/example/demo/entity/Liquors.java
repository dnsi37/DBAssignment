package com.example.demo.entity;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

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
@Entity(name = "Liquors")
@ToString
public class Liquors {

    @Id
    @GeneratedValue( strategy = GenerationType.IDENTITY )
    @Column(nullable = false)
    private int liquors_id;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private String country;

    @ManyToOne
    @JoinColumn(name = "category_id")
    private Liquor_category liquor_category;

    @Column(nullable = false)
    private int unit_price;

    @Builder
    public Liquors(String name , String country,int unit_price){
        this.name = name;
        this.country = country;
        this.unit_price = unit_price;
    }

    public void addCategory ( Liquor_category liquor_category) {
        this.liquor_category = liquor_category;
    }
    public void update (String name , String country,int unit_price){
        this.name = name;
        this.country = country;
        this.unit_price = unit_price;
    }

}
