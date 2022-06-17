import TobNav from "../components/TobNav"
import { useEffect, useRef, useState } from 'react';
import { Button, Modal } from "react-bootstrap";
import { createSaleDTO } from '../lib/DTO';
import { createSale, deleteSale, getSaleRecords, updateSale } from "../lib/SaleRecordAPI";

const LiquorInfo = ()=> {

    const [data,setData] = useState<Array<any>>()
    const [createShow,setCreateShow] = useState(false)
    const [updateShow,setUpdateShow] = useState(false)
    const [editMode, setEditMode] = useState(false)
    const getInfo = () =>{
        getSaleRecords().then(r=>{
            console.log('get Info')
            setData(r.data)
        })
    }
    const forSubmit:createSaleDTO = {
       customer_id : 0,
       liquor_id : 0,
       qty : 0,
       total_cost : 0
    }
    const forUpdate:createSaleDTO = useRef({
        customer_id : 0,
        liquor_id : 0,
        qty : 0,
        total_cost : 0
    }).current
    const reqeustID = useRef({id:0}).current
    const initUpdate = (data:any)=>{

        console.log(data)
        forUpdate.customer_id = data.customers.customer_id
        forUpdate.liquor_id = data.liquors.liquors_id
        forUpdate.qty = data.qty
        forUpdate.total_cost = data.total_cost
        reqeustID.id = data.order_id

    }
   
    useEffect(()=>{
        getInfo()
    },[])

    const CreateModal = ()=>{
        
        return(
            <>
            <Modal show={createShow} onHide={()=>{setCreateShow(false)}}  >
                <Modal.Header closeButton>
                    <Modal.Title>Create Sale Record</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <div 
                style={{display:'flex',flex:8,marginLeft:'10%',marginRight:'10%',
                borderRadius:'5px',marginBottom:'3%',backgroundColor:'#fed8d8',overflow:'auto',
                flexDirection:'column'}}>
                    <div style={{display:'flex', height:'10%',width:'100%' , borderBottom:'3px solid black'}}>
                        <div className="tableCol" style={{ flex:1 , fontSize:"0.5rem"}}>
                            Customer id
                        </div>
                        <div className="tableCol" style={{ flex:1 ,fontSize:"0.5rem"}}>
                            Liqour id
                        </div>
                        <div className="tableCol" style={{ flex:1 }}>
                            Qty
                        </div>
                        <div className="tableColR" style={{ flex:1 , fontSize : '80%'}}>
                            Total Cost
                        </div>
                    </div>
                    <div id="row" style={{display:'flex',height:'10%',width:'100%',borderBottom : '1px solid rgba(0,0,0,0.4)'}}>
                        <div className="tableColContent" style={{flex:1}}>
                            <input onChange={(e)=>{forSubmit.customer_id = parseInt(e.currentTarget.value
                            )}} style={{width:'100%'}} type='text' />
                        </div>
                        <div className="tableColContent" style={{flex:1}}>
                            <input onChange={(e)=>{forSubmit.liquor_id = parseInt(e.currentTarget.value)}} style={{width:'100%'}} type='text' />
                        </div>
                        <div className="tableColContent" style={{flex:1}}>
                            <input onChange={(e)=>{forSubmit.qty = parseInt(e.currentTarget.value) }} style={{width:'100%'}} type='text' />
                        </div>
                        <div className="tableColContentR" style={{flex:1}}>
                            <input onChange={(e)=>{forSubmit.qty = parseInt(e.currentTarget.value) }} style={{width:'100%'}} type='text' />
                        </div>
                    </div>
                </div>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={()=>{setCreateShow(false)}}>
                    Close
                </Button>
                <Button variant="primary" 
                onClick={async()=>{
                    await createSale(forSubmit)
                    await getInfo()
                }
                }>
                    Create
                </Button>
                </Modal.Footer>
             </Modal>
            </>
            
        )
    }
    const UpdateModal = ()=>{
        
        return(
            <>
            <Modal show={updateShow} onHide={()=>{setUpdateShow(false)}}  >
                <Modal.Header closeButton>
                    <Modal.Title>Update Sale Record</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <div 
                style={{display:'flex',flex:8,marginLeft:'10%',marginRight:'10%',
                borderRadius:'5px',marginBottom:'3%',backgroundColor:'#fed8d8',overflow:'scroll',
                flexDirection:'column'}}>
                    <div style={{display:'flex', height:'10%',width:'100%' , borderBottom:'3px solid black'}}>
                        <div className="tableCol" style={{ flex:1 , fontSize:"0.5rem"}}>
                            Customer id
                        </div>
                        <div className="tableCol" style={{ flex:1 , fontSize:"0.5rem"}}>
                            Liqour id
                        </div>
                        <div className="tableCol" style={{ flex:1 }}>
                            Qty
                        </div>
                        <div className="tableColR" style={{ flex:1 , fontSize : '80%'}}>
                            Total Cost
                        </div>
                    </div>
                    <div id="row" style={{display:'flex',height:'10%',width:'100%',borderBottom : '1px solid rgba(0,0,0,0.4)'}}>
                        <div className="tableColContent" style={{flex:1}}>
                            <input defaultValue={forUpdate.customer_id} onChange={(e)=>{forUpdate.customer_id = parseInt(e.currentTarget.value)}} style={{width:'100%'}} type='text' />
                        </div>
                        <div className="tableColContent" style={{flex:1}}>
                            <input defaultValue={forUpdate.liquor_id} onChange={(e)=>{forUpdate.liquor_id = parseInt(e.currentTarget.value)}} style={{width:'100%'}} type='text' />
                        </div>
                        <div className="tableColContentR" style={{flex:1}}>
                            <input defaultValue={forUpdate.qty} onChange={(e)=>{forUpdate.qty = parseInt(e.currentTarget.value) }} style={{width:'100%'}} type='text' />
                        </div>
                        <div className="tableColContentR" style={{flex:1}}>
                            <input defaultValue={forUpdate.total_cost} onChange={(e)=>{forUpdate.total_cost = parseInt(e.currentTarget.value) }} style={{width:'100%'}} type='text' />
                        </div>
                    </div>
                </div>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={()=>{setUpdateShow(false)}}>
                    Close
                </Button>
                <Button variant="primary" 
                onClick={async()=>{
                    
                    console.log(reqeustID.id,forUpdate)
                    updateSale(reqeustID.id,forUpdate).then((r)=>{
                        setTimeout(()=>{
                            getInfo()
                        },3000)
                        setUpdateShow(false)
                    })
                    
                }
                }>
                    Update
                </Button>
                </Modal.Footer>
             </Modal>
            </>
            
        )
    }

    return(
        <div style={{display:'flex',justifyContent:'center' ,alignContent:'space-between',height:'100vh',flexDirection:'row',flex:1}}>
            <TobNav></TobNav>
            <CreateModal/>
            <UpdateModal/>
            <div style={{display:'flex',justifyContent:'center' ,height:'100vh',flexDirection:'column',flex:1}}>
                <div style={{display:'flex',flex:1.5,justifyContent:'flex-end',alignItems:'end'
            }}>
                <div style={{marginRight:'50%' , fontWeight:'800', marginBottom:'1%'}}>Sale Record Information</div>
                <button onClick={()=>{setCreateShow(true)}} style={{width:'10%' , height : '50px',borderRadius:'15px',marginRight:'1%',backgroundColor:'#F28A8A' , marginBottom:'0.3%'}}>Add Sale Record</button>
                <button onClick={()=>{editMode?setEditMode(false):setEditMode(true)} } style={{width:'10%' , height : '50px',borderRadius:'15px',marginRight:'10%',backgroundColor:'#DB4848', marginBottom:'0.3%'}}>{editMode?"Cancel":"Edit Table"}</button>
                </div>
                <div 
                style={{display:'flex',flex:8,marginLeft:'10%',marginRight:'10%',
                borderRadius:'30px',marginBottom:'3%',backgroundColor:'#fed8d8',overflow:'auto',
                flexDirection:'column'}}>
                    <div style={{display:'flex', height:'10%',width:'100%' , borderBottom:'3px solid black'}}>
                        <div className="tableCol" style={{ flex:1 }}>
                            Customer Name
                        </div>
                        <div className="tableCol" style={{ flex:1 }}>
                            Liqour Name
                        </div>
                        <div className="tableCol" style={{ flex:1 }}>
                            Qty
                        </div>
                        <div className="tableColR" style={{ flex:1 , fontSize : '80%'}}>
                            Total Cost
                        </div>
                        {
                            editMode?<div className="tableColR" style={{ flex:0.5 ,borderLeft:'1px solid black'}}>
                            Edit</div> : <></>
                        }
                        
                    </div>
                    {
                       data?.map((value :any,index)=>{
                           
                            return (
                            <div
                            key={index}
                            id="row" style={{display:'flex',height:'10%',width:'100%',borderBottom : '1px solid rgba(0,0,0,0.4)'}}>
                                <div className="tableColContent" style={{flex:1}}>
                                    {value.customers.name}
                                </div>
                                <div className="tableColContent" style={{flex:1}}>
                                {value.liquors.name}
                                </div>
                                <div className="tableColContent" style={{flex:1}}>
                                {value.qty}
                                </div>
                                <div className="tableColContentR" style={{flex:1}}>
                                {value.total_cost} 원

                                </div>
                                {
                                    editMode?<div className="tableColContent" style={{flex:0.5 , justifyContent:'space-around'}}>
                                    <button onClick={()=>{
                                        setUpdateShow(true)
                                        initUpdate(value)
                                        }} className="editButton" style={{backgroundColor : 'skyblue' ,fontSize:'50%'}} >update</button>
                                    <button 
                                    onClick={()=>{
                                        console.log(value.liquors_id)
                                        deleteSale(value.liquors_id); 
                                        setTimeout(()=>{getInfo()},3000)
                                    }}
                                    className="editButton" style={{backgroundColor : 'red',fontSize:'50%'}} >delete</button>
                                    </div> : <></>
                                }
                                
                            </div>
                            )
                        })
                    }
                   
                   
                </div>
                
            </div>

        </div>
    )
}

export default LiquorInfo