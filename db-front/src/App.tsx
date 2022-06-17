import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import LiquorInfo from './pages/LiquorInfo';
import CustomerInfo from './pages/CustomerInfo';
import StockInfo from './pages/StockInfo';
import SaleRecordInfo from './pages/SaleRecordInfo';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/LiquorInfo' element= {<LiquorInfo/>}/>
        <Route path = 'CustomerInfo' element = {<CustomerInfo/>} />
        <Route path = 'SaleRecordInfo' element = {<SaleRecordInfo/>} />
        <Route path = 'StockInfo' element = {<StockInfo/>} />
      </Routes>
    </div>
  );
}

export default App;
