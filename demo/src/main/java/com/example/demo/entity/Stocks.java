package com.example.demo.entity;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;

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
@Entity(name = "Stocks")
@ToString
public class Stocks {

    @Id
    @GeneratedValue( strategy = GenerationType.IDENTITY )
    @Column(nullable = false)
    private int stock_id ;

    @OneToOne
    @JoinColumn(name = "liquor_id")
    private Liquors liquors;

    @Column(nullable = false)
    private int qty;

    @Column(nullable = false)
    private String location ;

    public void addLiquor (Liquors liquors) {
        this.liquors = liquors;
    }

    @Builder
    public  Stocks ( int qty, String location) {
        this.qty = qty;
        this.location = location;
    }
}
