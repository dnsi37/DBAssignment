import TobNav from "../components/TobNav"
import { getWindowDimensions } from '../components/dimension';
import { useNavigate } from "react-router-dom";



const Home = ()=>{

    const navigator = useNavigate()
    console.log('rerender')
    const {height ,width} = getWindowDimensions()
    return(
    <div style={{display:'flex',justifyContent:'center' ,alignContent:'space-between',height:'100vh',flexDirection:'row',flex:1}}>
        <TobNav/>
        <div style={{display:'flex',justifyContent:'center' ,alignContent:'space-between',flexDirection:'row',flex:1}}>
            <div className="menuCon" style={{backgroundColor:'#a05858'}}>
            <button className="menuButton" onClick={()=>{navigator('/LiquorInfo')}}>Liquor Info</button>
            </div>
            <div className="menuCon" style={{backgroundColor:'#d67c7c'}}>
                <button className="menuButton" onClick={()=>{navigator('/SaleRecordInfo')}}>Sale Record</button>
            </div>
            <div className="menuCon" style={{backgroundColor:'#d67c7c'}}>
            <button className="menuButton" onClick={()=>{navigator('/CustomerInfo')}}>Customer</button>
            </div>
            <div className="menuCon" style={{backgroundColor:'#a05858'}}>
            <button className="menuButton" onClick={()=>{navigator('/StockInfo')}}>Stock</button>
            </div>
        </div>
        
    </div>
    )


}

export default Home