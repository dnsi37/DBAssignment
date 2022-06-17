import TobNav from "../components/TobNav"
import { useEffect, useRef, useState } from 'react';
import { getLiquors, createLiquor, updateLiquor, deleteLiquor } from '../lib/LiquorInfoAPI';
import { Button, Modal } from "react-bootstrap";
import { createLiquorDTO } from '../lib/DTO';

const LiquorInfo = ()=> {

    const [data,setData] = useState<Array<any>>()
    const [createShow,setCreateShow] = useState(false)
    const [updateShow,setUpdateShow] = useState(false)
    const [editMode, setEditMode] = useState(false)
    const getInfo = () =>{
        getLiquors().then(r=>{
            console.log('get Info')
            setData(r.data)
        })
    }
    const forSubmit:createLiquorDTO = {
        name : '',
        country : '',
        unit_price : 0,
        category_id : 0
    }
    const forUpdate:createLiquorDTO = useRef({
        name : '',
        country : '',
        unit_price : 0,
        category_id : 0
    }).current
    const reqeustID = useRef({id:0}).current
    const initUpdate = (data:any)=>{

        forUpdate.name = data.name
        forUpdate.country = data.country
        forUpdate.unit_price = data.unit_price
        forUpdate.category_id = data.liquor_category.category_id
        reqeustID.id = data.liquors_id

    }
   
    useEffect(()=>{
        getInfo()
    },[])

    const CreateModal = ()=>{
        
        return(
            <>
            <Modal show={createShow} onHide={()=>{setCreateShow(false)}}  >
                <Modal.Header closeButton>
                    <Modal.Title>Create Liquor</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <div 
                style={{display:'flex',flex:8,marginLeft:'10%',marginRight:'10%',
                borderRadius:'5px',marginBottom:'3%',backgroundColor:'#fed8d8',overflow:'auto',
                flexDirection:'column'}}>
                    <div style={{display:'flex', height:'10%',width:'100%' , borderBottom:'3px solid black'}}>
                        <div className="tableCol" style={{ flex:1 }}>
                            Name
                        </div>
                        <div className="tableCol" style={{ flex:1 }}>
                            Origin
                        </div>
                        <div className="tableCol" style={{ flex:1 }}>
                            Price
                        </div>
                        <div className="tableColR" style={{ flex:1 , fontSize : '80%'}}>
                            Category ID
                        </div>
                    </div>
                    <div id="row" style={{display:'flex',height:'10%',width:'100%',borderBottom : '1px solid rgba(0,0,0,0.4)'}}>
                        <div className="tableColContent" style={{flex:1}}>
                            <input onChange={(e)=>{forSubmit.name = e.currentTarget.value}} style={{width:'100%'}} type='text' />
                        </div>
                        <div className="tableColContent" style={{flex:1}}>
                            <input onChange={(e)=>{forSubmit.country = e.currentTarget.value}} style={{width:'100%'}} type='text' />
                        </div>
                        <div className="tableColContentR" style={{flex:1}}>
                            <input onChange={(e)=>{forSubmit.unit_price = parseInt(e.currentTarget.value) }} style={{width:'100%'}} type='text' />
                        </div>
                        <div className="tableColContentR" style={{flex:1}}>
                            <input onChange={(e)=>{forSubmit.category_id = parseInt(e.currentTarget.value) }} style={{width:'100%'}} type='text' />
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
                    await createLiquor(forSubmit)
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
                    <Modal.Title>Update Liquor</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <div 
                style={{display:'flex',flex:8,marginLeft:'10%',marginRight:'10%',
                borderRadius:'5px',marginBottom:'3%',backgroundColor:'#fed8d8',overflow:'scroll',
                flexDirection:'column'}}>
                    <div style={{display:'flex', height:'10%',width:'100%' , borderBottom:'3px solid black'}}>
                        <div className="tableCol" style={{ flex:1 }}>
                            Name
                        </div>
                        <div className="tableCol" style={{ flex:1 }}>
                            Origin
                        </div>
                        <div className="tableCol" style={{ flex:1 }}>
                            Price
                        </div>
                        <div className="tableColR" style={{ flex:1 , fontSize : '80%'}}>
                            Category ID
                        </div>
                    </div>
                    <div id="row" style={{display:'flex',height:'10%',width:'100%',borderBottom : '1px solid rgba(0,0,0,0.4)'}}>
                        <div className="tableColContent" style={{flex:1}}>
                            <input defaultValue={forUpdate.name} onChange={(e)=>{forUpdate.name = e.currentTarget.value}} style={{width:'100%'}} type='text' />
                        </div>
                        <div className="tableColContent" style={{flex:1}}>
                            <input defaultValue={forUpdate.country} onChange={(e)=>{forUpdate.country = e.currentTarget.value}} style={{width:'100%'}} type='text' />
                        </div>
                        <div className="tableColContentR" style={{flex:1}}>
                            <input defaultValue={forUpdate.unit_price} onChange={(e)=>{forUpdate.unit_price = parseInt(e.currentTarget.value) }} style={{width:'100%'}} type='text' />
                        </div>
                        <div className="tableColContentR" style={{flex:1}}>
                            <input defaultValue={forUpdate.category_id} onChange={(e)=>{forUpdate.category_id = parseInt(e.currentTarget.value) }} style={{width:'100%'}} type='text' />
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
                    updateLiquor(reqeustID.id,forUpdate).then((r)=>{
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
                <div style={{marginRight:'50%' , fontWeight:'800', marginBottom:'1%'}}>Liquor Information</div>
                <button onClick={()=>{setCreateShow(true)}} style={{width:'10%' , height : '50px',borderRadius:'15px',marginRight:'1%',backgroundColor:'#F28A8A' , marginBottom:'0.3%'}}>Add Liquor</button>
                <button onClick={()=>{editMode?setEditMode(false):setEditMode(true)} } style={{width:'10%' , height : '50px',borderRadius:'15px',marginRight:'10%',backgroundColor:'#DB4848', marginBottom:'0.3%'}}>{editMode?"Cancel":"Edit Table"}</button>
                </div>
                <div 
                style={{display:'flex',flex:8,marginLeft:'10%',marginRight:'10%',
                borderRadius:'30px',marginBottom:'3%',backgroundColor:'#fed8d8',overflow:'auto',
                flexDirection:'column'}}>
                    <div style={{display:'flex', height:'10%',width:'100%' , borderBottom:'3px solid black'}}>
                        <div className="tableCol" style={{ flex:1 }}>
                            Name
                        </div>
                        <div className="tableCol" style={{ flex:1 }}>
                            Origin
                        </div>
                        <div className="tableCol" style={{ flex:1 }}>
                            Category
                        </div>
                        <div className="tableColR" style={{ flex:1 }}>
                            Price
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
                                    {value.name}
                                </div>
                                <div className="tableColContent" style={{flex:1}}>
                                {value.country}
                                </div>
                                <div className="tableColContent" style={{flex:1}}>
                                {value.liquor_category.name}
                                </div>
                                <div className="tableColContentR" style={{flex:1}}>
                                {value.unit_price} 원

                                </div>
                                {
                                    editMode?<div className="tableColContent" style={{flex:0.5 , justifyContent:'space-around'}}>
                                    <button onClick={()=>{
                                        setUpdateShow(true)
                                        initUpdate(value)
                                        }} className="editButton" style={{backgroundColor : 'skyblue',fontSize:'50%'}} >update</button>
                                    <button 
                                    onClick={()=>{
                                        console.log(value.liquors_id)
                                        deleteLiquor(value.liquors_id); 
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