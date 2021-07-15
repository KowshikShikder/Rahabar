import React, { useState } from 'react'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Cart from '../Cart/Cart'
import '../NavigationBar/NavigationBar.css'
import Login from '../LoginButton/Login'
import Logout from '../LoginButton/Logout'

export default function NavigationBar() {


    const [ShowCarts, setShowCarts] = useState()
    const [CloseButtonCart, setCloseButtonCart] = useState('open')

    const ShowCart=()=>{
        console.log(`Im am cart button and i am clicked`)
        if(CloseButtonCart=== 'close'){
            setCloseButtonCart('open')
            setShowCarts()
            document.getElementById('Close-Cart').style.display="none"
            document.getElementById('ShowCart').style.display="none"
            
        }
        else{
        setShowCarts(<Cart />)
        setCloseButtonCart('close')
        document.getElementById('Close-Cart').style.display="flex"
        document.getElementById('ShowCart').style.display="flex"


    }
}

    return (
        <div>

<nav className="navbar navbar-expand-sm bg-dark navbar-dark">

    <a href="k" className="navbar-brand"> <img src="" alt=""/>  </a>
    <button className="navbar-toggler" data-toggle="collapse" data-target="#one">
        <span className="navbar-toggle-icon">navBar</span>    
    </button>

    <div className="collapse navbar-collapse" id="one">
        <ul className="navbar-nav ml-auto">
            <li className="nav-item m-1 btn-outline-danger rounded btn-primary active"> <a href="ko" className="nav-link">  Colorful Design </a> </li>
            <li className="nav-item m-1 btn-outline-danger rounded btn-primary"> <a href="ko" className="nav-link">  Colorful  </a> </li>
            <li className="nav-item m-1 btn-outline-danger rounded btn-primary"> <a href="ko" className="nav-link">  Contact With Us </a>  </li>
            <li className="nav-item m-1 btn-outline-danger rounded btn-primary"> <a href="ko" className="nav-link">Exceptional Design </a>  </li>
            <li className="nav-item m-1 btn-outline-danger rounded btn-primary"> <Login/> <Logout/>  </li>

        </ul>

    </div>
    <div className="TopCart">
        <button className="btn btn-secondary" onClick={ShowCart}>
            <i class="fa fa-2x fa-shopping-cart" aria-hidden="true"></i>
        </button> 
    </div>

    <div class="ShowCart" id="ShowCart">
        {ShowCarts}

        <button className="btn btn-danger text-dark Close-Cart" id="Close-Cart" onClick={ShowCart} >
            <i class="fa fa-times" aria-hidden="true"></i>
        </button>
        
    </div>
</nav>


</div>
)}
