import React, { useState } from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { AppContext } from '../context/context';
import About from './about';
import Home from './home';
import Counter from './counter';
import Counter2 from './counter2';
import AppAtlas from './atlas/appAtlas';
import AppPixa from './pixa/appPixa';
import AppVip from './vip/appVip';


export default function AppRoutes() {

    const [number, setNember] = useState(33);
    const [coins, setCoins] = useState(6);
    const [counter, setCounter] = useState(0);

    return (
        <BrowserRouter>
            <AppContext.Provider value={
                {
                    val: "koko6",
                    number, setNember,
                    coins, setCoins,
                    counter, setCounter
                }
            }>
                <header className='p-2 container bg-info'>
                    <div className='float-end h5'>Coins: {coins}</div>
                    <Link to="/">Home </Link>
                    <Link to="/about">About </Link>
                    <Link to="/counter">Counter </Link>
                    <Link to="/counter2">Counter2 </Link>
                    <Link to="/appAtlas">AppAtlas </Link>
                    <Link to="/appPixa">AppPixa </Link>
                    <Link to="/vip">Vip </Link>

                </header>
                <Routes>
                    {/* <Route path="/" element={<Home/>}></Route> */}
                    <Route index element={<Home/>}></Route>
                    <Route path="/about" element={<About/>}></Route>                 
                    <Route path="/counter" element={<Counter/>}></Route>  
                    <Route path="/counter2" element={<Counter2/>}></Route>                                  
                    <Route path="/appAtlas" element={<AppAtlas/>}></Route>  
                    <Route path="/appPixa" element={<AppPixa/>}></Route>   
                    <Route path="/vip" element={<AppVip/>}></Route>                                                     
                </Routes>

            </AppContext.Provider>
            <footer className='p-2 container bg-danger'>footer</footer>
        </BrowserRouter>
    )
}
