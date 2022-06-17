package com.example.demo.controller;


import com.example.demo.dto.CreateCustomerDto;
import com.example.demo.dto.CreateLiquorDto;
import com.example.demo.entity.Customers;
import com.example.demo.entity.Liquors;
import com.example.demo.repository.LiquorCategoryRepo;
import com.example.demo.repository.LiquorsRepo;

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
@RequestMapping(path = "/api/liquor")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class LiquorInfoController {

    private LiquorsRepo liquorsRepo ;
    private LiquorCategoryRepo liquorCategoryRepo;

    @Autowired
    public LiquorInfoController(LiquorsRepo liquorsRepo, LiquorCategoryRepo liquorCategoryRepo) {
        this.liquorsRepo = liquorsRepo;
        this.liquorCategoryRepo = liquorCategoryRepo;
    }
    @GetMapping("/get")
    public List<Liquors> findAll(){
        return liquorsRepo.findAll();
    }

    @PostMapping("/create")
    public Liquors create(@RequestBody CreateLiquorDto createLiquorDto){
        Liquors newLiquor = createLiquorDto.toEntity();
        newLiquor.addCategory(liquorCategoryRepo.findById(createLiquorDto.getCategory_id()).orElseThrow());
        return liquorsRepo.save(newLiquor);
    }

    @PostMapping("/update")
    public Liquors update(@RequestParam String id, @RequestBody CreateLiquorDto createLiquorDto){

        Liquors updateObject = liquorsRepo.findById(Integer.parseInt(id)).orElseThrow(IllegalArgumentException::new);
        updateObject.update(createLiquorDto.getName(),createLiquorDto.getCountry(),createLiquorDto.getUnit_price());
        updateObject.addCategory(liquorCategoryRepo.findById(createLiquorDto.getCategory_id()).orElseThrow(IllegalArgumentException::new));

        liquorsRepo.save(updateObject);
        return updateObject;
    }

    @GetMapping("delete")
    public String delete (@RequestParam String id){
        System.out.println("id is");
        System.out.println(id);
        try {
            liquorsRepo.deleteById(Integer.parseInt(id));
            return "Delete success";
        }catch(Exception e){
            return  e.toString();
        }
    }

}
