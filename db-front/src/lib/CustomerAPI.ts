import axios from "axios";
import { createCustomerDTO } from './DTO';


export const getCustomers = async ()=>{

    const result = await axios.get("http://localhost:8080/api/customers/get").then((response)=>{
        return response
    },(reason)=>{
        return reason
    })

    return result
}

export const createCustomer = async (DTO :createCustomerDTO )=>{
    const result = await axios.post("http://localhost:8080/api/customers/create",JSON.stringify(DTO),{
        headers: {
          "Content-Type": `application/json`,
        },
      }).then((response)=>{
        console.log('Customer created')
        return response
    },(reason)=>{
        return reason
    })
    return result
}

export const updateCustomer = async (id:number,DTO :createCustomerDTO )=>{
    const result = await axios.post(`http://localhost:8080/api/customers/update?id=${id}`,JSON.stringify(DTO),{
        headers: {
          "Content-Type": `application/json`,
        },
      }).then((response)=>{
        return response
    },(reason)=>{
        return reason
    })

    return result
}

export const deleteCustomer = async (id:number) =>{

    const result = await axios.get(`http://localhost:8080/api/customers/delete?id=${id}`).then((response)=>{
        console.log('Customer deleted',response)
        return response
    },(reason)=>{
        return reason
    })

    return result
}