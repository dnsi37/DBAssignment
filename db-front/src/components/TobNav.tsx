import { useNavigate } from 'react-router-dom';



const TobNav = ()=>{

    const navi = useNavigate()
    return(
    <div style={{backgroundColor : 'transparent',position:'absolute',top:0,left:0,height:'7%',width:'100%',display:'flex' ,justifyContent:'center' ,alignContent:'center',borderBottom: '3px solid #4b1212',alignItems:'center',}}>
        <p onClick={()=>navi('/')} style={{color:"#4b1212" , fontSize:'200%',fontWeight:900 , fontFamily:'sans-serif'}}>Liquors World</p>
    </div>)
}

export default TobNav