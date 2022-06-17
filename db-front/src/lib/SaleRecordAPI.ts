import axios from "axios";
import { createSaleDTO } from './DTO';


export const getSaleRecords = async ()=>{

    const result = await axios.get("http://localhost:8080/api/sale/get").then((response)=>{
        return response
    },(reason)=>{
        return reason
    })

    return result
}

export const createSale = async (DTO :createSaleDTO )=>{
    const result = await axios.post("http://localhost:8080/api/sale/create",JSON.stringify(DTO),{
        headers: {
          "Content-Type": `application/json`,
        },
      }).then((response)=>{
        console.log('Sale created')
        return response
    },(reason)=>{
        return reason
    })

    return result
}

export const updateSale = async (id:number,DTO :createSaleDTO )=>{
    const result = await axios.post(`http://localhost:8080/api/sale/update?id=${id}`,JSON.stringify(DTO),{
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

export const deleteSale = async (id:number) =>{

    const result = await axios.get(`http://localhost:8080/api/sale/delete?id=${id}`).then((response)=>{
        console.log('Sale deleted',response)
        return response
    },(reason)=>{
        return reason
    })

    return result
}