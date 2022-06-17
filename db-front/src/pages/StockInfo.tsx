import TobNav from "../components/TobNav"
import { useEffect, useRef, useState } from 'react';
import { getLiquors, createLiquor, updateLiquor, deleteLiquor } from '../lib/LiquorInfoAPI';
import { Button, Modal } from "react-bootstrap";
import { createStockDTO } from '../lib/DTO';
import { getStocks, createStock, updateStock } from '../lib/StockAPI';

const LiquorInfo = ()=> {

    const [data,setData] = useState<Array<any>>()
    const [createShow,setCreateShow] = useState(false)
    const [updateShow,setUpdateShow] = useState(false)
    const [editMode, setEditMode] = useState(false)
    const getInfo = () =>{
        getStocks().then(r=>{
            console.log('get Info')
            setData(r.data)
        })
    }
    const forSubmit:createStockDTO = {
        liquor_id : 0,
        qty : 0,
        location : ''
    }
    const forUpdate:createStockDTO = useRef({
        liquor_id : 0,
        qty : 0,
        location : ''
    }).current
    const reqeustID = useRef({id:0}).current
    const initUpdate = (data:any)=>{

        console.log(data)
        forUpdate.liquor_id = data.liquors.liquors_id
        forUpdate.qty = data.qty
        forUpdate.location = data.location
        reqeustID.id = data.stock_id

    }
   
    useEffect(()=>{
        getInfo()
    },[])

    const CreateModal = ()=>{
        
        return(
            <>
            <Modal show={createShow} onHide={()=>{setCreateShow(false)}}  >
                <Modal.Header closeButton>
                    <Modal.Title>Create Stock</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <div 
                style={{display:'flex',flex:8,marginLeft:'10%',marginRight:'10%',
                borderRadius:'5px',marginBottom:'3%',backgroundColor:'#fed8d8',overflow:'auto',
                flexDirection:'column'}}>
                    <div style={{display:'flex', height:'10%',width:'100%' , borderBottom:'3px solid black'}}>
                        <div className="tableCol" style={{ flex:1 }}>
                            Liquor
                        </div>
                        <div className="tableCol" style={{ flex:1 }}>
                            Qty
                        </div>
                        <div className="tableColR" style={{ flex:1 , fontSize : '80%'}}>
                            Location
                        </div>
                    </div>
                    <div id="row" style={{display:'flex',height:'10%',width:'100%',borderBottom : '1px solid rgba(0,0,0,0.4)'}}>
                        <div className="tableColContent" style={{flex:1}}>
                            <input onChange={(e)=>{forSubmit.liquor_id = parseInt(e.currentTarget.value)}} style={{width:'100%'}} type='text' />
                        </div>
                        <div className="tableColContent" style={{flex:1}}>
                            <input onChange={(e)=>{forSubmit.qty =parseInt( e.currentTarget.value)}} style={{width:'100%'}} type='text' />
                        </div>
                        
                        <div className="tableColContentR" style={{flex:1}}>
                            <input onChange={(e)=>{forSubmit.location = e.currentTarget.value }} style={{width:'100%'}} type='text' />
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
                    await createStock(forSubmit)
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
                    <Modal.Title>Update Stock</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <div 
                style={{display:'flex',flex:8,marginLeft:'10%',marginRight:'10%',
                borderRadius:'5px',marginBottom:'3%',backgroundColor:'#fed8d8',overflow:'scroll',
                flexDirection:'column'}}>
                    <div style={{display:'flex', height:'10%',width:'100%' , borderBottom:'3px solid black'}}>
                        <div className="tableCol" style={{ flex:1 }}>
                            Liquor
                        </div>
                        <div className="tableCol" style={{ flex:1 }}>
                            Qty
                        </div>
                        <div className="tableColR" style={{ flex:1 , fontSize : '80%'}}>
                            Location
                        </div>
                    </div>
                    <div id="row" style={{display:'flex',height:'10%',width:'100%',borderBottom : '1px solid rgba(0,0,0,0.4)'}}>
                        <div className="tableColContent" style={{flex:1}}>
                            <input defaultValue={forUpdate.liquor_id} onChange={(e)=>{forUpdate.liquor_id = parseInt(e.currentTarget.value)}} style={{width:'100%'}} type='text' />
                        </div>
                        <div className="tableColContent" style={{flex:1}}>
                            <input defaultValue={forUpdate.qty} onChange={(e)=>{forUpdate.qty = parseInt(e.currentTarget.value)}} style={{width:'100%'}} type='text' />
                        </div>
                        
                        <div className="tableColContentR" style={{flex:1}}>
                            <input defaultValue={forUpdate.location} onChange={(e)=>{forUpdate.location = e.currentTarget.value }} style={{width:'100%'}} type='text' />
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
                    updateStock(reqeustID.id,forUpdate).then((r)=>{
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
                <div style={{marginRight:'50%' , fontWeight:'800', marginBottom:'1%'}}>Stock Information</div>
                <button onClick={()=>{setCreateShow(true)}} style={{width:'10%' , height : '50px',borderRadius:'15px',marginRight:'1%',backgroundColor:'#F28A8A' , marginBottom:'0.3%'}}>Add Stock</button>
                <button onClick={()=>{editMode?setEditMode(false):setEditMode(true)} } style={{width:'10%' , height : '50px',borderRadius:'15px',marginRight:'10%',backgroundColor:'#DB4848', marginBottom:'0.3%'}}>{editMode?"Cancel":"Edit Table"}</button>
                </div>
                <div 
                style={{display:'flex',flex:8,marginLeft:'10%',marginRight:'10%',
                borderRadius:'30px',marginBottom:'3%',backgroundColor:'#fed8d8',overflow:'auto',
                flexDirection:'column'}}>
                    <div style={{display:'flex', height:'10%',width:'100%' , borderBottom:'3px solid black'}}>
                        <div className="tableCol" style={{ flex:1 }}>
                            Liquor
                        </div>
                        <div className="tableCol" style={{ flex:1 }}>
                            Qty
                        </div>
                        <div className="tableColR" style={{ flex:1 }}>
                            Location
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
                                {value.liquors.name}
                                </div>
                                <div className="tableColContent" style={{flex:1}}>
                                {value.qty} EA
                                </div>
                                <div className="tableColContent" style={{flex:1}}>
                                {value.location}
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
                                        deleteLiquor(value.liquors_id); 
                                        setTimeout(()=>{getInfo()},3000)
                                    }}
                                    className="editButton" style={{backgroundColor : 'red' ,fontSize:'50%'}} >delete</button>
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