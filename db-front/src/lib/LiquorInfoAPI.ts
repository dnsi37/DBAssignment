import axios from "axios";
import { createLiquorDTO } from './DTO';


export const getLiquors = async ()=>{

    const result = await axios.get("http://localhost:8080/api/liquor/get").then((response)=>{
        return response
    },(reason)=>{
        return reason
    })

    return result
}

export const createLiquor = async (DTO :createLiquorDTO )=>{
    const result = await axios.post("http://localhost:8080/api/liquor/create",JSON.stringify(DTO),{
        headers: {
          "Content-Type": `application/json`,
        },
      }).then((response)=>{
        console.log('Liquor created')
        return response
    },(reason)=>{
        return reason
    })

    return result
}

export const updateLiquor = async (id:number,DTO :createLiquorDTO )=>{
    const result = await axios.post(`http://localhost:8080/api/liquor/update?id=${id}`,JSON.stringify(DTO),{
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

export const deleteLiquor = async (id:number) =>{

    const result = await axios.get(`http://localhost:8080/api/liquor/delete?id=${id}`).then((response)=>{
        console.log('Liquor deleted',response)
        return response
    },(reason)=>{
        return reason
    })

    return result
}