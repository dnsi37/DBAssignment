import axios from "axios";
import { createStockDTO } from './DTO';


export const getStocks = async ()=>{

    const result = await axios.get("http://localhost:8080/api/stocks/get").then((response)=>{
        return response
    },(reason)=>{
        return reason
    })

    return result
}

export const createStock = async (DTO :createStockDTO )=>{
    const result = await axios.post("http://localhost:8080/api/stocks/create",JSON.stringify(DTO),{
        headers: {
          "Content-Type": `application/json`,
        },
      }).then((response)=>{
        console.log('Stock created')
        return response
    },(reason)=>{
        return reason
    })

    return result
}

export const updateStock = async (id:number,DTO :createStockDTO )=>{
    const result = await axios.post(`http://localhost:8080/api/stocks/update?id=${id}`,JSON.stringify(DTO),{
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

export const deleteStock = async (id:number) =>{

    const result = await axios.get(`http://localhost:8080/api/stocks/delete?id=${id}`).then((response)=>{
        console.log('Stock deleted',response)
        return response
    },(reason)=>{
        return reason
    })

    return result
}