package com.example.demo.entity;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity(name = "Liquor_category")
@ToString
public class Liquor_category {

    @Id
    @GeneratedValue( strategy = GenerationType.IDENTITY )
    @Column(nullable = false)
    private int category_id ;

    @Column(nullable = false)
    private String name ;
}
