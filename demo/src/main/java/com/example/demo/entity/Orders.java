package com.example.demo.entity;


import java.sql.Timestamp;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

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
@Entity(name = "Orders")
@ToString
public class Orders {

    @Id
    @GeneratedValue( strategy = GenerationType.IDENTITY )
    @Column(nullable = false)
    private int order_id;

    @ManyToOne
    @JoinColumn(name = "customer_id")
    private Customers customers;

    @Column(name = "timestamp", nullable = false, updatable = false, insertable = false, columnDefinition = "TIMESTAMP DEFAULT CURRENT_TIMESTAMP")
    private Timestamp timestamp;

    @ManyToOne
    @JoinColumn(name = "liquor_id")
    private Liquors liquors;

    @Column(nullable = false)
    private int qty;

    @Column(nullable = false)
    private  int total_cost;


    public int getOrder_id() {
        return order_id;
    }

    public Customers getCustomers() {
        return customers;
    }

    public Timestamp getTimestamp() {
        return timestamp;
    }

    public Liquors getLiquors() {
        return liquors;
    }

    public int getQty() {
        return qty;
    }

    public int getTotal_cost() {
        return total_cost;
    }

    public void addCustomer (Customers customers) {
        this.customers = customers;
    }

    public void addLiquor (Liquors liquors) {
        this.liquors = liquors;
    }

    @Builder
    public Orders (int qty , int total_cost) {
        this.qty = qty;
        this.total_cost = total_cost;
    }


}
