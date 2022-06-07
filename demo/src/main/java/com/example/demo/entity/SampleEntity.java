package com.example.demo.entity;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Builder
@ToString
@AllArgsConstructor
@NoArgsConstructor
@Entity(name = "dook")
public class SampleEntity {

    @Id
    @Column(nullable = false)
    private int bookid;

    @Column(nullable = true)
    private String bookname;

    @Column(nullable = true)
    private String publisher;

    @Column(nullable = true)
    private  int price ;

}
